import streamlit as st

def render_home():
    # Hero Section
    st.markdown("<h1 style='text-align: center; font-family: serif; color: #4a4a4a;'>Jain Vibes</h1>", unsafe_allow_html=True)
    st.markdown("<h3 style='text-align: center; color: #666; font-weight: 300;'>A Jain Emotional Wellness Companion for Today's Generation</h3>", unsafe_allow_html=True)
    st.markdown("---")

    # Intro
    st.markdown("""
    <div style='text-align: center; padding: 20px; background-color: #f9f9f9; border-radius: 10px; margin-bottom: 20px;'>
        <p style='font-size: 1.1em; line-height: 1.6;'>
            Welcome to <b>Jain Vibes</b>, a sanctuary where ancient Jain wisdom meets modern emotional wellness. 
            In a world of constant noise and anxiety, we provide a space for grounding, healing, and inner peace. 
            Our platform is designed specifically for Gen-Z, offering tools that resonate with your life while staying true to the timeless principles of 
            <b>Ahimsa</b> (Non-violence), <b>Satya</b> (Truth), and <b>Aparigraha</b> (Non-attachment).
        </p>
    </div>
    """, unsafe_allow_html=True)

    # Core Pillars
    st.subheader("Core Pillars")
    col1, col2 = st.columns(2)
    with col1:
        with st.container(border=True):
            st.markdown("#### 🕊️ Jain Wisdom")
            st.markdown("Timeless teachings adapted for modern mental health challenges.", help="Ancient wisdom for modern life")
        
        with st.container(border=True):
            st.markdown("#### ⚖️ Emotional Balance")
            st.markdown("Tools to navigate anxiety, stress, and relationships.")

    with col2:
        with st.container(border=True):
            st.markdown("#### 🎵 Music Therapy")
            st.markdown("Curated devotional tracks to shift your energy instantly.")
            
        with st.container(border=True):
            st.markdown("#### 🤖 Compassionate AI")
            st.markdown("An empathetic coach available 24/7 to listen and guide.")

    st.markdown("---")

    # Showcases
    st.subheader("Explore Our Tools")
    
    with st.expander("🤖 AI Coach Modes", expanded=True):
        st.write("Explore our diverse AI personas designed to meet you where you are. Whether you need a supportive Friend, a wise Spiritual Guide, or a gentle Romantic Mode, our AI adapts to your emotional needs.")
        if st.button("Try the AI Coach", key="home_coach_btn"):
            st.session_state.active_tab = "Coach"
            st.rerun()

    with st.expander("🎵 Jain Music Engine"):
        st.write("Discover the power of sound with our mood-based music engine. From Morning Calm to High-Energy Bhakti, select your vibe and let the music heal you.")

    with st.expander("🗺️ 30-Day Healing Journey"):
        st.write("Embark on a transformative 30-day challenge. Each day brings a new task focused on gratitude, mindfulness, or connection, helping you build lasting spiritual habits.")

    st.markdown("---")
    
    # Quick Links
    c1, c2 = st.columns(2)
    with c1:
        if st.button("Start Now", use_container_width=True, type="primary"):
            st.session_state.active_tab = "Coach"
            st.rerun()
    with c2:
        if st.button("Try the AI Coach", use_container_width=True):
            st.session_state.active_tab = "Coach"
            st.rerun()

    # Subdomain Integration
    st.info("🌐 **Access the Full App**: Jain Vibes is also available as a dedicated web application. Experience the full suite of tools at **jainvibes.example.com**.")
