from flask import Flask, jsonify, request
from flask_cors import CORS

from api_connect import fetch_data
from db_config import insert_city, get_city_by_name, get_all_cities
app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return 'hello flask'


@app.route('/cities')
def cities():
    city = request.args.get('q')
    try:
        data = fetch_data(city)
        weekWeather = []
        i = 1
        while i < len(data['list']):
            # weekWeather.append(data['list'][i][''])
            weekWeather.append(
                {
                    'date': data['list'][i]['dt_txt'],
                    'feels_like': data['list'][i]['main']['feels_like'],
                    'sea_level': data['list'][i]['main']['sea_level'],
                    'grnd_level': data['list'][i]['main']['grnd_level'],
                    'pressure': data['list'][i]['main']['pressure'],
                    'humidity': data['list'][i]['main']['humidity'],
                    'temp': data['list'][i]['main']['temp'],
                    'temp_max': data['list'][i]['main']['temp_max'],
                    'icon': data['list'][i]['weather'][0]['icon'],
                }
            )
            i += 1
        city_data = {
            "_id": data['city']['id'],
            "city": city.lower(),
            "cityName": data['city']['name'].lower(),
            "country": data['city']['country'],
            "todayWeather": {
                'date': data['list'][0]['dt_txt'],
                'feels_like': data['list'][0]['main']['feels_like'],
                'sea_level': data['list'][0]['main']['sea_level'],
                'grnd_level': data['list'][0]['main']['grnd_level'],
                'pressure': data['list'][0]['main']['pressure'],
                'humidity': data['list'][0]['main']['humidity'],
                'temp': data['list'][0]['main']['temp'],
                'temp_max': data['list'][0]['main']['temp_max'],
                'icon': data['list'][0]['weather'][0]['icon'],
            },
            'weekWeather': weekWeather
        }
        insert_city(city_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    return jsonify(city_data)


@app.route('/get-city/<city>', methods=['GET'])
def get_city(city):
    try:
        city_data = get_city_by_name(city)
        otherDays = [date for date in city_data['weekWeather']
                     if date['date'][-8:] == '09:00:00']

        temperatures = [city_data['todayWeather']['temp']] + \
            [day['temp'] for day in otherDays]

        days = [city_data['todayWeather']['date']] + \
            [day['date'] for day in otherDays]

        humidities = [city_data['todayWeather']['humidity']] + \
            [day['humidity'] for day in otherDays]

        return jsonify({
            'cityName': city_data['cityName'],
            'country': city_data['country'],
            'today': city_data['todayWeather'],
            'restOfWeek': otherDays,
            'days': days,
            'temperatures': temperatures,
            'humidities': humidities
        })
    except Exception as e:
        return jsonify({'error': 'City Not Found'}), 404


@app.route('/history')
def history():
    return jsonify(list(get_all_cities()))


if (__name__ == '__main__'):
    app.run(debug=True)
