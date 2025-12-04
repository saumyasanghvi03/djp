import streamlit as st
import requests
from src.data.music_data import MUSIC_DATA

def get_thumbnail(url):
    """Fetches album art from Spotify oEmbed API."""
    if 'track_thumbnails' not in st.session_state:
        st.session_state['track_thumbnails'] = {}
    
    if url in st.session_state['track_thumbnails']:
        return st.session_state['track_thumbnails'][url]
    
    try:
        # Using Spotify's public oEmbed API
        oembed_url = f"https://open.spotify.com/oembed?url={url}"
        resp = requests.get(oembed_url)
        if resp.status_code == 200:
            data = resp.json()
            thumb = data.get('thumbnail_url')
            st.session_state['track_thumbnails'][url] = thumb
            return thumb
    except Exception as e:
        print(f"Error fetching thumbnail for {url}: {e}")
        return None
    
    return None

def render_music():
    st.header("Jain Music Engine")
    st.markdown("---")
    
    st.subheader("How It Works")
    st.write("Select your current mood or desired state, and our engine curates a specific block of Jain devotional tracks to match. No searching required—just pure vibes.")
    st.markdown("---")

    # Filter Logic
    selected_mood = st.session_state.get("music_mood")
    
    if selected_mood:
        if st.button("← Show All Playlists"):
            st.session_state.pop("music_mood", None)
            st.rerun()
        
        filtered_playlists = [p for p in MUSIC_DATA["playlist_blocks"] if p["id"] == selected_mood]
    else:
        filtered_playlists = MUSIC_DATA["playlist_blocks"]

    for playlist in filtered_playlists:
        st.subheader(playlist["title"])
        st.caption(playlist["description"])
        
        cols = st.columns(len(playlist["tracks"]))
        for idx, track in enumerate(playlist["tracks"]):
            with cols[idx]:
                thumb = get_thumbnail(track["url"])
                if thumb:
                    st.image(thumb, use_container_width=True)
                else:
                    # Fallback placeholder
                    st.image("https://placehold.co/150x150/e2e8f0/475569?text=Music", use_container_width=True)
                
                st.markdown(f"**{track['name']}**")
                st.markdown(f"[Play on Spotify]({track['url']})")
        st.markdown("---")
