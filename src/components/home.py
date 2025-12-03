import streamlit as st
from src.data.challenges import CHALLENGES

def render_home():
    st.markdown("<h1 style='text-align: center; color: #4F46E5;'>Your Mind. Your Peace. Your Path.</h1>", unsafe_allow_html=True)
    st.markdown("<p style='text-align: center; color: #6B7280;'>How are you feeling today?</p>", unsafe_allow_html=True)

    # Mood Check-in
    st.subheader("How are you feeling?")
    col1, col2, col3, col4 = st.columns(4)
    with col1:
        if st.button("☀️ Happy"):
            st.toast("Glad to hear that!")
    with col2:
        if st.button("💨 Anxious"):
            st.session_state.active_tab = "Coach"
            st.rerun()
    with col3:
        if st.button("🔥 Angry"):
            st.session_state.active_tab = "SOS"
            st.rerun()
    with col4:
        if st.button("💧 Sad"):
            st.session_state.active_tab = "Coach"
            st.session_state.active_persona = "coach" # Ensure supportive persona
            st.rerun()

    # Daily Challenge
    current_day = 4
    today_challenge = next((c for c in CHALLENGES["challenge"] if c["day"] == current_day), None)
    
    if today_challenge:
        st.markdown("---")
        st.markdown(f"""
        <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 20px; border-radius: 15px; color: white;">
            <small>Day {current_day} of 30</small>
            <h3>{today_challenge['title']}</h3>
            <p>{today_challenge.get('coach_note', '')}</p>
        </div>
        """, unsafe_allow_html=True)
        
        if st.button("Start Today's Tasks", use_container_width=True):
            st.session_state.active_tab = "Journey"
            st.rerun()

    # Quick Actions
    st.markdown("---")
    c1, c2 = st.columns(2)
    with c1:
        if st.button("📚 Exam Mode", use_container_width=True):
            st.session_state.active_tab = "Coach"
            st.rerun()
    with c2:
        if st.button("🆘 SOS Calm", use_container_width=True):
            st.session_state.active_tab = "SOS"
            st.rerun()
