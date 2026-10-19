# Duolingo XP Farming Bot (Node.js)

An automated script designed to farm XP on **Duolingo** by simulating the completion of Russian (Cyrillic) Alphabet Lessons via API requests. The bot includes a randomized completion time generator to mimic natural human behavior.

## 🚀 Features

- **Automated Session Creation**: Automatically initializes lesson sessions using the Duolingo API.
- **XP Farming Simulation**: Simulates a 100% correct answer rate for Russian alphabet lessons.
- **Human-like Delay**: Generates random lesson durations (120 - 300 seconds) and applies a 1-second interval between rounds to prevent immediate detection.
- **Security First**: Credentials and tokens are securely managed via Environment Variables.

---

## 🛠️ Prerequisites

1. **Node.js** installed on your machine.
2. **Install Dependency** (Axios) by running the following command:

   ```bash
   npm install axios
   ```

3. **Get Environment Variables**: You need to extract your authentication tokens and cookies from the Duolingo web interface using browser DevTools (Network tab).
   - `DUOLINGO_SECRET_JWT`: Your authentication JWT token (used in the Authorization Bearer header).
   - `DUOLINGO_SECRET_COOKIE`: Inspect you console and type `document.cookie` then copy it to use here.
   - `DUOLINGO_SECRET_USER_ID`: Your unique Duolingo User ID.

---

## 🏃 How to Run

Pass your credentials as environment variables in your terminal and run the script:

### Linux / macOS:

```bash
DUOLINGO_SECRET_JWT="your_jwt_token_here" \
DUOLINGO_SECRET_COOKIE="your_cookie_string_here" \
DUOLINGO_SECRET_USER_ID="your_user_id_here" \
node index.js
```

### Windows (PowerShell):

```powershell
\$env:DUOLINGO_SECRET_JWT="your_jwt_token_here"
\$env:DUOLINGO_SECRET_COOKIE="your_cookie_string_here"
\$env:DUOLINGO_SECRET_USER_ID="your_user_id_here"
node index.js
```

---

## ⚠️ Disclaimer

For study purposes. Automating actions to gain XP or score boosts violates Duolingo's **Terms of Service**. Using this script carries the risk of having your account **banned** or restricted from leaderboards. Use it at your own risk.
