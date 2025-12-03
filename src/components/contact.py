import streamlit as st

def render_contact():
    st.header("Get in Touch")
    st.write("We would love to hear from you. Whether you have feedback, questions, or just want to share your story.")
    st.markdown("---")

    with st.form("contact_form"):
        name = st.text_input("Name")
        email = st.text_input("Email")
        message = st.text_area("Message")
        submitted = st.form_submit_button("Submit")
        
        if submitted:
            st.success("Thank you! Your message has been received.")

    st.markdown("---")
    st.subheader("Support Details")
    st.write("Email: support@jainvibes.example.com")
