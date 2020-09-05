import time
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_graphql import GraphQLView
from flask_mongoengine import MongoEngine
from schema import schema
import json
import logging

config = json.loads(open("../config.json").read())
uri = 'mongodb+srv://'+config['mongo_user']+':'+config['mongo_pass']+'@'+config['mongo_host']

app = Flask(__name__)
app.config['WTF_CSRF_ENABLED'] = False
app.config['MONGODB_SETTINGS'] = {
    'db': 'roots',
    'host': uri
}
cors = CORS(app)
db = MongoEngine(app)

default_audition_query = '''
query {
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
}
'''.strip()

default_audition_mutation = '''
mutation {
  createAuditionee(
    name: "Ashley Stone",
    email: "example@gmail.com",
    phone: "123-456-7890",
    maxPieces: 2,
    number: 2
  ) {
    name
    email
    phone
    maxPieces
    number
  }
}
'''.strip()

default_choreographer_query = '''
query {
  allChoreographer {
    edges {
      node {
        id
        name
        email
        phone
      }
    }
  }
}
'''.strip()

default_choreographer_mutation = '''
mutation {
  createChoreographer(
    name: "Ashley Stone",
    email: "example@gmail.com",
    phone: "123-456-7890"
  ) {
    name
    email
    phone
  }
}
'''.strip()

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True)
)

# # An endpoint to get the current time
# @app.route('/time')
# def get_current_time():
#     data = {'time': time.time()}
#     return jsonify(data)

if __name__ == '__main__':
    app.run()
