# StudyBunny
Study webapp to help students with studying for assignments, tests, and projects for different classes. This webapp will give students different ways to study, depending on the study method that matches for them. It will get inputs of different notes, lectures, videos that the students have and import it into either better notes, or another learning method that will help him. 

![image](https://github.com/user-attachments/assets/03a000a3-674f-4e51-a5bc-9b3b404a9df5)

# StudyBunny Backend

A simple Flask backend for logging study sessions, analyzing study habits, and providing personalized study method recommendations.

## Features
- Log study sessions
- Analyze user study metrics
- Get personalized study method recommendations

## Setup

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
3. **Run the server**
   ```bash
   python app.py
   ```

## API Endpoints

### Log a Study Session
- **POST** `/log_session`
- **Body (JSON):**
  ```json
  {
    "user_id": "user123",
    "subject": "Math",
    "method": "Pomodoro",
    "duration": 45,
    "timestamp": "2024-06-01T10:00:00" // optional
  }
  ```

### Get User Metrics
- **GET** `/user_metrics?user_id=user123`
- **Response:**
  ```json
  {
    "total_sessions": 5,
    "total_time": 180,
    "methods": {"Pomodoro": 120, "Flashcards": 60}
  }
  ```

### Get Recommendation
- **GET** `/recommendation?user_id=user123`
- **Response:**
  ```json
  {
    "recommendation": "Based on your study history, you are most effective with: Pomodoro. Try using this method more often!"
  }
  ```

---

Feel free to extend the backend with authentication, more analytics, or other features as needed!

