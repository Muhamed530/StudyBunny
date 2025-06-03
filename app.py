from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
from analysis import get_user_metrics, get_recommendation

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
db = SQLAlchemy(app)

from models import StudySession

@app.route('/log_session', methods=['POST'])
def log_session():
    data = request.json
    session = StudySession(
        user_id=data['user_id'],
        subject=data['subject'],
        method=data['method'],
        duration=data['duration'],
        timestamp=data.get('timestamp')
    )
    db.session.add(session)
    db.session.commit()
    return jsonify({'message': 'Session logged successfully'})

@app.route('/user_metrics')
def user_metrics():
    user_id = request.args.get('user_id')
    sessions = StudySession.query.filter_by(user_id=user_id).all()
    df = pd.DataFrame([s.to_dict() for s in sessions])
    metrics = get_user_metrics(df)
    return jsonify(metrics)

@app.route('/recommendation')
def recommendation():
    user_id = request.args.get('user_id')
    sessions = StudySession.query.filter_by(user_id=user_id).all()
    df = pd.DataFrame([s.to_dict() for s in sessions])
    rec = get_recommendation(df)
    return jsonify({'recommendation': rec})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True) 