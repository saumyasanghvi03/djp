import streamlit as st
import requests
import os
import time
import random
import io
try:
    from gtts import gTTS
    VOICE_AVAILABLE = True
except ImportError:
    VOICE_AVAILABLE = False
    print("Warning: gTTS not installed. Voice features disabled.")
from src.data.personas import PERSONAS
from src.data.kits import KITS
from src.data.replies import THERAPEUTIC_REPLIES

def render_coach():
    st.header("Choose your Guide")
    
    # Language Selector for Voice
    lang_code = "en"
    if VOICE_AVAILABLE:
        lang_code = st.selectbox("Voice Language", ["en", "hi", "gu"], format_func=lambda x: {"en": "English", "hi": "Hindi", "gu": "Gujarati"}[x])

    # Persona Selection (Buttons)
    persona_ids = list(PERSONAS.keys())
    
    # Initialize active persona if not set
    if "active_persona" not in st.session_state:
        st.session_state.active_persona = "coach"

    # Horizontal Scrollable Container for Buttons (Simulated with columns)
    cols = st.columns(len(persona_ids))
    for idx, pid in enumerate(persona_ids):
        with cols[idx]:
            # Highlight active persona
            label = PERSONAS[pid]["name"].split(" ")[0] # Short name
            if pid == "exam": label = "Exam"
            if pid == "prevention": label = "Safe"
            
            type = "primary" if st.session_state.active_persona == pid else "secondary"
            if st.button(label, key=f"p_btn_{pid}", type=type, use_container_width=True):
                st.session_state.active_persona = pid
                st.rerun()

    selected_persona_id = st.session_state.active_persona
    persona = PERSONAS[selected_persona_id]

    # Safety Banner for Prevention Mode
    if selected_persona_id == "prevention":
        st.error("🛡️ You are in a safe space. This mode prioritizes your safety and stability.")

    # --- PRE-BUILT KITS SECTION ---
    with st.expander("🧩 Quick Help Kits (Tap to Ask)", expanded=False):
        kit_ids = list(KITS.keys())
        selected_kit_id = st.selectbox("Select a Kit:", kit_ids, format_func=lambda x: f"{KITS[x]['icon']} {KITS[x]['title']}")
        
        if selected_kit_id:
            kit = KITS[selected_kit_id]
            st.caption(f"Quick Q&A for {kit['title']}")
            
            # Display Questions as Buttons
            for q_item in kit["questions"]:
                if st.button(q_item["q"], key=f"kit_q_{selected_kit_id}_{q_item['q'][:10]}", use_container_width=True):
                    # Inject Q&A into Chat
                    st.session_state.messages.append({"role": "user", "content": q_item["q"]})
                    st.session_state.messages.append({"role": "assistant", "content": q_item["a"]})
                    st.rerun()
    
    # --- INSTANT WISDOM SECTION ---
    with st.expander("✨ Instant Wisdom (Tap for Calm)", expanded=False):
        reply_categories = list(THERAPEUTIC_REPLIES.keys())
        cols_w = st.columns(2)
        for idx, cat in enumerate(reply_categories):
            with cols_w[idx % 2]:
                if st.button(f"{cat.replace('_', ' ').title()}", key=f"wisdom_{cat}", use_container_width=True):
                    wisdom = random.choice(THERAPEUTIC_REPLIES[cat])
                    st.session_state.messages.append({"role": "assistant", "content": f"✨ **{wisdom}**"})
                    st.rerun()
    # ------------------------------

    # Chat History
    if "messages" not in st.session_state:
        st.session_state.messages = []

    # Display Chat
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

    # Input
    prompt = st.chat_input(f"Speak your heart — I’m here with calmness...")
    if prompt:
        # User Message
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.markdown(prompt)
        st.rerun()

    # Check if last message is from user and needs a response
    if st.session_state.messages and st.session_state.messages[-1]["role"] == "user":
        generate_ai_response(selected_persona_id, persona, lang_code)

def generate_ai_response(selected_persona_id, persona, lang_code):
    with st.chat_message("assistant"):
        message_placeholder = st.empty()
        
        # 1. SAFETY INTERCEPTOR (Hardcoded)
        if selected_persona_id == "prevention":
            time.sleep(1) # Slow down pace
            safety_response = """**Crisis Safe Mode (India-Only Version)**

If you are experiencing a mental health crisis or having thoughts of self-harm, please reach out to professional help immediately.

**24/7 India Mental Health Support**
*   **Tele MANAS (Government of India):** 14416

**NGO Helplines**
*   **Vandrevala Foundation:** +91 9999 666 555

**Emergency Services**
*   **For any immediate danger:** Call 112

Your safety is the highest priority. Reaching out to a trained professional can make a meaningful difference. Stay with someone you trust and seek support right away."""
            message_placeholder.markdown(safety_response)
            st.session_state.messages.append({"role": "assistant", "content": safety_response})
            return

        # 2. API CALL (Perplexity)
        api_key = os.getenv("VITE_PERPLEXITY_API_KEY") or os.getenv("PERPLEXITY_API_KEY")
        if not api_key:
            st.error("API Key missing. Please check .env file.")
            return

        try:
            headers = {
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json"
            }
            # Prepare messages for API: Ensure it starts with 'user' (after system)
            # Filter out leading 'assistant' messages from the history sent to API
            api_messages = []
            found_first_user = False
            for m in st.session_state.messages:
                if m["role"] == "user":
                    found_first_user = True
                if found_first_user:
                    api_messages.append({"role": m["role"], "content": m["content"]})

            payload = {
                "model": "sonar",
                "messages": [
                    {"role": "system", "content": persona["system_prompt"]},
                    *api_messages
                ],
                "temperature": 0.7
            }
            
            response = requests.post("https://api.perplexity.ai/chat/completions", json=payload, headers=headers)
            response.raise_for_status()
            ai_text = response.json()["choices"][0]["message"]["content"]
            
            message_placeholder.markdown(ai_text)
            st.session_state.messages.append({"role": "assistant", "content": ai_text})

            # Voice Output
            if VOICE_AVAILABLE:
                try:
                    tts = gTTS(text=ai_text, lang=lang_code, slow=False)
                    audio_fp = io.BytesIO()
                    tts.write_to_fp(audio_fp)
                    audio_fp.seek(0)
                    st.audio(audio_fp, format='audio/mp3', autoplay=True)
                except Exception as e:
                    st.warning(f"Voice generation failed: {e}")

        except requests.exceptions.HTTPError as err:
            st.error(f"API Error: {err}")
            st.code(response.text) # Show full error details
        except Exception as e:
            st.error(f"Connection error: {e}")
