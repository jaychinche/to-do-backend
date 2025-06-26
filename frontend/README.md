# ToDo App Frontend (Vite + React)

This is a Vite + React frontend for a ToDo app. It uses axios for API calls to a backend server.

## Setup & Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Install axios (if not already):
   ```sh
   npm install axios
   ```
3. Update the backend API URL in `src/App.jsx`:
   - Replace `<EC2_BACKEND_PUBLIC_IP>` with your backend's public IP address.

4. Start the development server:
   ```sh
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

- Main logic: `src/App.jsx`
- API calls: via axios
