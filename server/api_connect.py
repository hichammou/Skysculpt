import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv('API_KEY')


def fetch_data(city: str):
    url = f'https://api.openweathermap.org/data/2.5/forecast?q={
        city}&appid={API_KEY}&units=metric'

    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        raise Exception(f'Error fetching data: ({e})')
