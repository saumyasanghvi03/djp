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
    st.header("Pick Your Mood — I’ll choose your music.")
    st.caption("Your vibe creates your playlist.")

    for playlist in MUSIC_DATA["playlist_blocks"]:
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
