from mongoengine import Document
from mongoengine.fields import StringField, IntField

class Auditionee(Document):
    meta = {'collection': 'auditionees'}
    name = StringField(required=True)
    email = StringField(required=True)
    phone = StringField(required=True)
    maxPieces = IntField(required=True)
    number = IntField(required=True)
