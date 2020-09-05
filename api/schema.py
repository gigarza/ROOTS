import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
from models import Auditionee, Choreographer

class AuditioneeType(MongoengineObjectType):
    class Meta:
        model = Auditionee
        interfaces = (Node,)

class ChoreographerType(MongoengineObjectType):
    class Meta:
        model = Choreographer
        interfaces = (Node,)

class Query(graphene.ObjectType):
    node = Node.Field()
    all_auditionee = MongoengineConnectionField(AuditioneeType)
    auditionee = graphene.Field(AuditioneeType)
    all_choreographer = MongoengineConnectionField(ChoreographerType)
    choreographer = graphene.Field(ChoreographerType)

class CreateAuditionee(graphene.Mutation):
    id = graphene.Int()
    name = graphene.String()
    email = graphene.String()
    phone = graphene.String()
    productions = graphene.String()
    maxPieces = graphene.Int()
    number = graphene.Int()

    class Arguments:
        name = graphene.String()
        email = graphene.String()
        phone = graphene.String()
        productions = graphene.String()
        maxPieces = graphene.Int()
        number = graphene.Int()

    def mutate(self, info, name, email, phone, productions, maxPieces, number):
        auditionee = Auditionee(name=name, email=email, phone=phone, productions=productions, maxPieces=maxPieces, number=number)
        auditionee.save()

        return CreateAuditionee(
            id=auditionee.id,
            name=auditionee.name,
            email=auditionee.email,
            phone=auditionee.phone,
            productions=auditionee.productions,
            maxPieces=auditionee.maxPieces,
            number=auditionee.number
        )

class CreateChoreographer(graphene.Mutation):
    id = graphene.Int()
    name = graphene.String()
    email = graphene.String()
    phone = graphene.String()

    class Arguments:
        name = graphene.String()
        email = graphene.String()
        phone = graphene.String()

    def mutate(self, info, name, email, phone):
        choreographer = Choreographer(name=name, email=email, phone=phone)
        choreographer.save()

        return CreateChoreographer(
            id=choreographer.id,
            name=choreographer.name,
            email=choreographer.email,
            phone=choreographer.phone
        )

class Mutation(graphene.ObjectType):
    node = Node.Field()
    create_auditionee = CreateAuditionee.Field()
    create_choreographer = CreateChoreographer.Field()


schema = graphene.Schema(query=Query, mutation=Mutation, types=[Auditionee, Choreographer])
