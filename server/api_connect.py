import requests

API_KEY = '3fd5c21266528f88f30a8d85d25eb498'


def fetch_data(city: str):
    url = f'https://api.openweathermap.org/data/2.5/forecast?q={
        city}&appid={API_KEY}&units=metric'

    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        raise Exception(f'Error fetching data: ({e})')
