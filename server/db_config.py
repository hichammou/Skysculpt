from pymongo import MongoClient

client = MongoClient('mongodb://127.0.0.1:27017/')
db = client['skysculpt']
collection = db['weather']


def insert_city(data):
    print('start')
    check = collection.find_one(
        {'city': data['city'].lower()})
    if (check != None):
        collection.find_one_and_delete({'city': data['city'].lower()})
    collection.insert_one(data)
    return 'success'


def get_city_by_name(name):
    city = collection.find_one({"city": name}, {'_id': 0})
    if (city == None):
        raise Exception('City Not Found')
    return city


def get_all_cities():
    return collection.find()
