import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
from models import Auditionee

class AuditioneeType(MongoengineObjectType):
    class Meta:
        model = Auditionee
        interfaces = (Node,)

class Query(graphene.ObjectType):
    node = Node.Field()
    all_auditionee = MongoengineConnectionField(AuditioneeType)
    auditionee = graphene.Field(AuditioneeType)

class CreateAuditionee(graphene.Mutation):
    id = graphene.Int()
    name = graphene.String()
    email = graphene.String()
    phone = graphene.String()
    maxPieces = graphene.Int()
    number = graphene.Int()

    class Arguments:
        name = graphene.String()
        email = graphene.String()
        phone = graphene.String()
        maxPieces = graphene.Int()
        number = graphene.Int()

    def mutate(self, info, name, email, phone, maxPieces, number):
        auditionee = Auditionee(name=name, email=email, phone=phone, maxPieces=maxPieces, number=number)
        auditionee.save()

        return CreateAuditionee(
            id=auditionee.id,
            name=auditionee.name,
            email=auditionee.email,
            phone=auditionee.phone,
            maxPieces=auditionee.maxPieces,
            number=auditionee.number
        )

class Mutation(graphene.ObjectType):
    node = Node.Field()
    create_auditionee = CreateAuditionee.Field()


schema = graphene.Schema(query=Query, mutation=Mutation, types=[Auditionee])
