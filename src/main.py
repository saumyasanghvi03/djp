import streamlit as st
from dotenv import load_dotenv
import os

# Load environment variables
# Load environment variables
dotenv_path = os.path.join(os.getcwd(), ".env")
load_dotenv(dotenv_path, override=True)

api_key = os.getenv("VITE_PERPLEXITY_API_KEY") or os.getenv("PERPLEXITY_API_KEY")
print(f"DEBUG: .env path: {dotenv_path}")
print(f"DEBUG: API Key loaded: {'Yes' if api_key else 'No'}")
if api_key:
    print(f"DEBUG: Key starts with: {api_key[:5]}...")

# Set Page Config
st.set_page_config(
    page_title="Jain Vibe",
    page_icon="🧘",
    layout="centered",
    initial_sidebar_state="collapsed"
)

# Custom CSS for Gen-Z Aesthetic
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
    
    /* Global Text Visibility */
    html, body, [class*="css"], .stMarkdown, .stText, h1, h2, h3, p, span, div, label {
        color: #000000 !important;
    }
    
    /* App Background */
    .stApp {
        background-color: #ffffff;
    }
    
    /* Inputs & Selectboxes */
    .stTextInput>div>div>input, .stSelectbox>div>div>div {
        color: #000000 !important;
        background-color: #ffffff !important;
        border-color: #cbd5e1;
    }
    
    /* Buttons */
    .stButton>button {
        border-radius: 12px;
        border: 1px solid #cbd5e1;
        background-color: #ffffff;
        color: #000000 !important;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        transition: all 0.2s;
    }
    
    .stButton>button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        border-color: #000000;
        background-color: #f8fafc;
    }
    
    /* Chat Input */
    .stChatInputContainer textarea {
        color: #000000 !important;
        background-color: #ffffff !important;
    }

    /* Hide Streamlit Elements */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
</style>
""", unsafe_allow_html=True)

# Navigation State
if "active_tab" not in st.session_state:
    st.session_state.active_tab = "Home"

# Import Components
from src.components.home import render_home
from src.components.coach import render_coach
from src.components.music import render_music
from src.components.sos import render_sos
from src.components.journey import render_journey

# Sidebar Navigation (Hidden by default, accessible via hamburger)
with st.sidebar:
    st.title("Jain Vibe")
    if st.button("🏠 Home"): st.session_state.active_tab = "Home"
    if st.button("💬 Coach"): st.session_state.active_tab = "Coach"
    if st.button("🎵 Music"): st.session_state.active_tab = "Music"
    if st.button("🆘 SOS"): st.session_state.active_tab = "SOS"
    if st.button("🗺️ Journey"): st.session_state.active_tab = "Journey"

# Main Content Area
if st.session_state.active_tab == "Home":
    render_home()
elif st.session_state.active_tab == "Coach":
    render_coach()
elif st.session_state.active_tab == "Music":
    render_music()
elif st.session_state.active_tab == "SOS":
    render_sos()
elif st.session_state.active_tab == "Journey":
    render_journey()

# Bottom Navigation (Mobile-like)
st.markdown("---")
cols = st.columns(5)
with cols[0]:
    if st.button("🏠\nHome", key="nav_home"): st.session_state.active_tab = "Home"; st.rerun()
with cols[1]:
    if st.button("💬\nCoach", key="nav_coach"): st.session_state.active_tab = "Coach"; st.rerun()
with cols[2]:
    if st.button("🎵\nMusic", key="nav_music"): st.session_state.active_tab = "Music"; st.rerun()
with cols[3]:
    if st.button("🆘\nSOS", key="nav_sos"): st.session_state.active_tab = "SOS"; st.rerun()
with cols[4]:
    if st.button("🗺️\nJourney", key="nav_journey"): st.session_state.active_tab = "Journey"; st.rerun()
