import streamlit as st

def render_home():
    # Hero Section - Vibe Check
    st.markdown("""
    <div style='text-align: center; padding: 40px 20px; margin-bottom: 30px;'>
        <h1 style='font-size: 3.5rem; margin-bottom: 10px; background: linear-gradient(45deg, #5f5a55, #dabc78); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>Vibe Check.</h1>
        <p style='font-size: 1.2rem; color: #666; margin-bottom: 30px;'>Your emotional wellness sanctuary. How are you feeling right now?</p>
    </div>
    """, unsafe_allow_html=True)

    # Vibe Check Options
    v_c1, v_c2, v_c3, v_c4, v_c5 = st.columns(5)
    
    with v_c1:
        if st.button("😰 Stressed", use_container_width=True):
            st.toast("Take a deep breath. We're here. 🌿")
            st.session_state.active_tab = "Coach"
            st.session_state.active_persona = "anxiety"
            # Inject message to trigger auto-response
            if "messages" not in st.session_state: st.session_state.messages = []
            st.session_state.messages.append({"role": "user", "content": "I'm feeling really stressed and anxious right now. Can you help me calm down?"})
            st.rerun()
            
    with v_c2:
        if st.button("😔 Sad", use_container_width=True):
            st.toast("It's okay not to be okay. 🫂")
            st.session_state.active_tab = "Coach"
            st.session_state.active_persona = "friendly"
            if "messages" not in st.session_state: st.session_state.messages = []
            st.session_state.messages.append({"role": "user", "content": "I'm feeling sad and low today. I just need someone to talk to."})
            st.rerun()
            
    with v_c3:
        if st.button("⚡ Energetic", use_container_width=True):
            st.toast("Let's channel that energy! 🔥")
            st.session_state.active_tab = "Music"
            st.session_state.music_mood = "genz_bhajan_club"
            st.rerun()
            
    with v_c4:
        if st.button("🧘 Calm", use_container_width=True):
            st.toast("Stay in this flow. 🌊")
            st.session_state.active_tab = "Music"
            st.session_state.music_mood = "morning_calm"
            st.rerun()
            
    with v_c5:
        if st.button("🌫️ Lost", use_container_width=True):
            st.toast("Let's find clarity together. 🧭")
            st.session_state.active_tab = "Coach"
            st.session_state.active_persona = "soulmate"
            if "messages" not in st.session_state: st.session_state.messages = []
            st.session_state.messages.append({"role": "user", "content": "I feel a bit lost and disconnected. I need some spiritual guidance."})
            st.rerun()

    st.markdown("<div style='margin-bottom: 40px;'></div>", unsafe_allow_html=True)

    # Mood Grid - Glassmorphism Cards
    c1, c2 = st.columns(2)
    
    with c1:
        st.markdown("""
        <div class="glass-card" style="height: 100%; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 10px;">🤖</div>
            <h3 style="margin: 0;">AI Coach</h3>
            <p style="font-size: 0.9rem; color: #666;">Vent, chat, and heal.</p>
        </div>
        """, unsafe_allow_html=True)
        if st.button("Start Chat", key="home_btn_coach", use_container_width=True):
            st.session_state.active_tab = "Coach"
            st.rerun()

    with c2:
        st.markdown("""
        <div class="glass-card" style="height: 100%; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 10px;">🎵</div>
            <h3 style="margin: 0;">Music Engine</h3>
            <p style="font-size: 0.9rem; color: #666;">Mood-based tunes.</p>
        </div>
        """, unsafe_allow_html=True)
        if st.button("Listen Now", key="home_btn_music", use_container_width=True):
            st.session_state.active_tab = "Music"
            st.rerun()

    st.markdown("<div style='height: 20px;'></div>", unsafe_allow_html=True)

    c3, c4 = st.columns(2)

    with c3:
        st.markdown("""
        <div class="glass-card" style="height: 100%; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 10px;">🗺️</div>
            <h3 style="margin: 0;">30-Day Journey</h3>
            <p style="font-size: 0.9rem; color: #666;">Daily micro-habits.</p>
        </div>
        """, unsafe_allow_html=True)
        if st.button("Start Journey", key="home_btn_journey", use_container_width=True):
            st.session_state.active_tab = "Journey"
            st.rerun()

    with c4:
        st.markdown("""
        <div class="glass-card" style="height: 100%; text-align: center; border: 1px solid #ffcccc; background: rgba(255, 200, 200, 0.2);">
            <div style="font-size: 3rem; margin-bottom: 10px;">🆘</div>
            <h3 style="margin: 0; color: #d32f2f;">SOS Mode</h3>
            <p style="font-size: 0.9rem; color: #d32f2f;">Immediate help.</p>
        </div>
        """, unsafe_allow_html=True)
        if st.button("Get Help", key="home_btn_sos", use_container_width=True):
            st.session_state.active_tab = "SOS"
            st.rerun()

    st.markdown("---")
    
    # Quick Daily Wisdom
    st.markdown("""
    <div class="glass-card" style="text-align: center; margin-top: 20px;">
        <span style="font-size: 1.5rem;">✨</span>
        <p style="font-style: italic; font-size: 1.1rem; color: #444;">"Peace comes from within. Do not seek it without."</p>
        <p style="font-size: 0.8rem; color: #888;">— Mahavir Swami</p>
    </div>
    """, unsafe_allow_html=True)
