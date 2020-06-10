import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
from models import Auditionee as AuditioneeModel

class Auditionee(MongoengineObjectType):
    class Meta:
        model = AuditioneeModel
        interfaces = (Node,)

class Query(graphene.ObjectType):
    node = Node.Field()
    all_auditionee = MongoengineConnectionField(Auditionee)
    auditionee = graphene.Field(Auditionee)

schema = graphene.Schema(query=Query, types=[Auditionee])
