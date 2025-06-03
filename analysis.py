# requirements
# pip install pandas
# pip install Flask-RESTful
# pip install Flask-CORS
# pip install sqlalchemy 


import pandas as pd

def get_user_metrics(df):
    if df.empty:
        return {'total_sessions': 0, 'total_time': 0, 'methods': {}}
    total_sessions = len(df)
    total_time = df['duration'].sum()
    methods = df.groupby('method')['duration'].sum().to_dict()
    return {
        'total_sessions': total_sessions,
        'total_time': total_time,
        'methods': methods
    }

def get_recommendation(df):
    if df.empty:
        return 'No data available. Try logging some study sessions!'
    # Recommend the method with the highest average duration
    method_stats = df.groupby('method')['duration'].mean()
    best_method = method_stats.idxmax()
    return f"Based on your study history, you are most effective with: {best_method}. Try using this method more often!" 