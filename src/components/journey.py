import streamlit as st
from src.data.challenges import CHALLENGES

def render_journey():
    st.header("Your Healing Progress")
    # Button to advance day progress
    if st.button("Advance Day"):
        max_day = len(CHALLENGES["challenge"])
        st.session_state.current_day = min(st.session_state.get("current_day", 1) + 1, max_day)
    if "current_day" not in st.session_state:
        st.session_state.current_day = 1
    current_day = st.session_state.current_day

    for day in CHALLENGES["challenge"]:
        is_unlocked = day["day"] <= current_day
        is_current = day["day"] == current_day
        
        with st.container():
            col1, col2 = st.columns([1, 5])
            with col1:
                if is_current:
                    st.markdown("🔵 **Today**")
                elif is_unlocked:
                    st.markdown("✅ Done")
                else:
                    st.markdown("🔒 Locked")
            
            with col2:
                if is_unlocked:
                    with st.expander(f"Day {day['day']}: {day['title']}", expanded=is_current):
                        for task in day["tasks"]:
                            st.checkbox(task, key=f"task_{day['day']}_{task[:10]}")
                        if "quote" in day:
                            st.caption(f"_{day['quote']}_")
                else:
                    st.markdown(f"**Day {day['day']}**: Locked")
