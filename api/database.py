from mongoengine import connect
from models import Auditionee
import json

config = json.loads(open("config.json").read())

# Gets the database to input data to from MongoDB
# client = MongoClient('mongodb://'+config['mongo_user']+':'+config['mongo_pass']+'@'+config['mongo_host'])
# db = client.get_database()

uri = 'mongodb://'+config['mongo_user']+':'+config['mongo_pass']+'@'+config['mongo_host']

# roots maybe needs to say 'auditionees' (which is a collection)?
connect('roots',alias='default', host=uri)

def init_db():
    # Create the fixtures
    ashley = Auditionee(name='Ashley', email='example@gmail.com', phone='1234567890', max_pieces=2 , number=2)
    ashley.save()
