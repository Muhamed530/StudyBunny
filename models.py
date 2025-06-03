from app import db
from datetime import datetime

class StudySession(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(64), nullable=False)
    subject = db.Column(db.String(64), nullable=False)
    method = db.Column(db.String(64), nullable=False)
    duration = db.Column(db.Float, nullable=False)  # in minutes
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'subject': self.subject,
            'method': self.method,
            'duration': self.duration,
            'timestamp': self.timestamp.isoformat() if self.timestamp else None
        } 