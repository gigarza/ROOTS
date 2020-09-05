from mongoengine import Document
from mongoengine.fields import StringField, IntField

class Auditionee(Document):
    meta = {'collection': 'auditionees'}
    name = StringField(required=True)
    email = StringField(required=True)
    phone = StringField(required=True)
    productions = StringField(required=True)
    maxPieces = IntField(required=True)
    number = IntField(required=True)

class Choreographer(Document):
    meta = {'collection': 'choreographers'}
    name = StringField(required=True)
    email = StringField(required=True)
    phone = StringField(required=True)
