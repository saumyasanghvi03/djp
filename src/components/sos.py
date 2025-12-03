import streamlit as st
import time

def render_sos():
    st.markdown("<h1 style='color: #e11d48; text-align: center;'>SOS Calm</h1>", unsafe_allow_html=True)

    if "sos_step" not in st.session_state:
        st.session_state.sos_step = 0

    steps = [
        {"title": "Breathe with me", "desc": "Inhale for 4... Hold for 7... Exhale for 8."},
        {"title": "Grounding Audio", "desc": "Playing Navkar Mantra (Soothing)...\n\n[Listen on Spotify](https://open.spotify.com/track/2ptdFDtOqx4olPDq5bLiE8)"},
        {"title": "You are Safe", "desc": "Call a loved one if you need to talk."}
    ]

    # Main SOS Button (Step 0)
    if st.session_state.sos_step == 0:
        st.markdown("<div style='height: 50px;'></div>", unsafe_allow_html=True)
        col1, col2, col3 = st.columns([1, 2, 1])
        with col2:
            if st.button("Calm My Mind", type="primary", use_container_width=True):
                st.session_state.sos_step = 1
                st.rerun()
        return # Exit the function after rendering the initial button

    # Adjust index for steps after initial button
    # Step 1 -> Index 0, Step 2 -> Index 1, Step 3 -> Index 2
    current_step_index = st.session_state.sos_step - 1
    if current_step_index < 0: current_step_index = 0
    if current_step_index >= len(steps): current_step_index = len(steps) - 1
    
    current_step = steps[current_step_index]

    st.markdown(f"<h2 style='text-align: center;'>{current_step['title']}</h2>", unsafe_allow_html=True)
    
    # Visual Breathing Circle (CSS Animation)
    if st.session_state.sos_step == 1: 
        st.markdown("""
        <div style="display: flex; justify-content: center; margin: 40px 0;">
            <div style="
                width: 150px; height: 150px; 
                background-color: #fecdd3; 
                border-radius: 50%; 
                animation: breathe 4s infinite ease-in-out;
                display: flex; align-items: center; justify-content: center;
            ">
                <div style="width: 100px; height: 100px; background-color: #fb7185; border-radius: 50%;"></div>
            </div>
        </div>
        <style>
            @keyframes breathe {
                0%, 100% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.2); opacity: 0.4; }
            }
        </style>
        """, unsafe_allow_html=True)
    
    st.info(current_step["desc"])

    col1, col2 = st.columns(2)
    with col1:
        if st.session_state.sos_step > 1: # Back button enabled if not on the first actual step
            if st.button("⬅️ Back", use_container_width=True):
                st.session_state.sos_step -= 1
                st.rerun()
        else:
            st.button("⬅️ Back", disabled=True, use_container_width=True)

    with col2:
        if st.session_state.sos_step < len(steps): # Next button enabled until the last step
            if st.button("Next ➡️", use_container_width=True):
                st.session_state.sos_step += 1
                st.rerun()
        else:
            if st.button("Finish ✅", use_container_width=True):
                st.session_state.sos_step = 0 # Reset to 0 to show "Calm My Mind" again
                st.success("You completed the ritual.")
                st.rerun()
