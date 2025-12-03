# Jain Vibe: Gen-Z Wellness App 🧘‍♂️✨

**Jain Vibe** is a spiritual wellness companion designed for Gen-Z, blending ancient Jain wisdom with modern mental health tools.

## 🌟 Features

*   **AI Coach**: Chat with different personas (Coach, Friend, Spiritual Guide) for personalized advice. Includes voice responses! 🗣️
*   **Mood Music**: Curated Spotify playlists for every mood (Calm, Focus, Energy). 🎵
*   **30-Day Journey**: A gamified spiritual challenge to build habits like gratitude and mindfulness. 🗺️
*   **SOS Mode**: A panic button for immediate grounding with breathing exercises and calming mantras. 🆘

## 🚀 Getting Started

### 1. Prerequisites
*   Python 3.8 or higher
*   A [Perplexity AI API Key](https://www.perplexity.ai/) (for the AI Coach)

### 2. Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/YOUR_USERNAME/jain-vibe.git
    cd jain-vibe
    ```

2.  **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3.  **Set up environment variables**:
    *   Create a file named `.env` in the root folder.
    *   Add your API key:
        ```env
        VITE_PERPLEXITY_API_KEY=your_actual_api_key_here
        ```

### 3. Running the App

Run the following command in your terminal:

```bash
streamlit run src/main.py
```

The app will open in your browser at `http://localhost:8501`.

## 📱 How to Use

*   **Home Tab**: Check your daily mood and see your current challenge progress.
*   **Coach Tab**:
    *   Select a **Persona** (e.g., "Friend" for casual chat, "Spiritual" for deep wisdom).
    *   Type your question or use the **Quick Help Kits**.
    *   Listen to the AI's response (ensure your volume is up!).
*   **Music Tab**: Click on a playlist to see tracks. Click "Play on Spotify" to listen.
*   **Journey Tab**: Mark your daily tasks as done. Use the "Advance Day" button (for testing) to see future content.
*   **SOS Tab**: Click "Calm My Mind" for a guided breathing exercise and the Navkar Mantra.

## 🛠️ Troubleshooting

*   **Voice not working?** Ensure `gTTS` is installed (`pip install gTTS`) and your browser allows auto-play audio.
*   **API Error?** Double-check your `.env` file and ensure your API key is valid.

---
*Built with ❤️ for inner peace.*
