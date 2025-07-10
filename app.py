from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('loginPage.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.form.get('studydata')
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    try:
        # Assume CSV with header
        from io import StringIO
        df = pd.read_csv(StringIO(data))
        # Example analysis: average study time
        if 'Study Time' in df.columns:
            avg_time = df['Study Time'].mean()
            recommendation = f"Your average study time is {avg_time:.2f} hours. Try to keep a consistent schedule!"
        else:
            recommendation = "No 'Study Time' column found. Please include it in your data."
        return jsonify({'recommendation': recommendation})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
