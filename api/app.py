import time
from flask import Flask
from flask_graphql import GraphQLView
from flask_mongoengine import MongoEngine
from schema import schema
import json

config = json.loads(open("../config.json").read())
uri = 'mongodb://'+config['mongo_user']+':'+config['mongo_pass']+'@'+config['mongo_host']

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'roots',
    'host': uri
}
db = MongoEngine(app)

default_query = '''
{
  allAuditionee {
    edges {
      node {
        id
        name
        email
        phone
        maxPieces
        number
      }
    }
  }
}'''.strip()

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True)
)

# An endpoint to get the current time
@app.route('/time')
def get_current_time():
    return {'time': time.time()}

if __name__ == '__main__':
    app.run()
