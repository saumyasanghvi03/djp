import streamlit as st

def render_features():
    st.header("Features")
    st.markdown("---")

    features = [
        {
            "title": "AI Jain Spiritual Coach",
            "desc": "Your personal guide for emotional and spiritual support. Chat with personas like the Prevention Mode for safety or the Hype Mode for motivation.",
            "icon": "🤖"
        },
        {
            "title": "Jain Music Engine",
            "desc": "A curated library of Jain devotional music categorized by mood. Instantly find the perfect track for meditation, study, or energy.",
            "icon": "🎵"
        },
        {
            "title": "One-Tap SOS Calming Tool",
            "desc": "Immediate relief for panic and high anxiety. Follow a guided 5-step flow including breathing exercises and the Navkar Mantra.",
            "icon": "🆘"
        },
        {
            "title": "Mood Journaling",
            "desc": "Track your emotional state daily. Reflect on your feelings and see how your spiritual practice influences your well-being.",
            "icon": "📝"
        },
        {
            "title": "Voice Mode Conversation",
            "desc": "Speak directly to the AI coach. Experience a natural, comforting conversation with voice responses that feel like a real friend.",
            "icon": "🗣️"
        },
        {
            "title": "Daily Rituals",
            "desc": "Simple, actionable rituals to incorporate Jain principles into your daily routine for a balanced life.",
            "icon": "🕯️"
        },
        {
            "title": "Exam Mode",
            "desc": "Specialized support for students. Focus tools and calming techniques to manage exam stress and boost productivity.",
            "icon": "📚"
        },
        {
            "title": "Crisis Safe Mode",
            "desc": "A protective mode that prioritizes your safety. Provides immediate grounding resources and helpline information when you need it most.",
            "icon": "🛡️"
        },
        {
            "title": "Pre-Built Mental Wellness Kits",
            "desc": "Targeted kits for specific challenges like anxiety, breakup recovery, and relationship FOMO. Get instant, relevant advice.",
            "icon": "📦"
        }
    ]

    for feature in features:
        with st.container():
            col1, col2 = st.columns([1, 5])
            with col1:
                st.markdown(f"<div style='text-align: center; font-size: 2em; background-color: #f0f0f0; border-radius: 50%; width: 60px; height: 60px; line-height: 60px;'>{feature['icon']}</div>", unsafe_allow_html=True)
            with col2:
                st.subheader(feature["title"])
                st.write(feature["desc"])
            st.markdown("---")
