from flask import request, Blueprint, jsonify
from helpers import token_required
from models import db, User, Pokemon, pokemon_schema

# Route that serves the frontend
from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    frontend_dir = os.path.join(os.path.dirname(__file__), 'frontend/dist')
    if path != "" and os.path.exists(os.path.join(frontend_dir, path)):
        return send_from_directory(frontend_dir, path)
    else:
        return send_from_directory(frontend_dir, 'index.html')


api = Blueprint('api',__name__, url_prefix='/api')

@api.route('/getdata')
def getdata():
    return {'POKEMON': 'Gotta catch em allll!!!'}


# ------------------------------------------------------------------------------------------------------------------------------------------->

# Create a pokemon
@api.route('/pokemon', methods = ['POST'])
@token_required
def create_pokemon(current_user_token):
    number = request.json['number']
    name = request.json['name']
    type = request.json['type']
    ability = request.json['ability']
    user_token = current_user_token.token

    print(f'BIG TESTER: {current_user_token.token}')

    pokemon = Pokemon(number, name, type, ability, user_token = user_token )

    db.session.add(pokemon)
    db.session.commit()

    response = pokemon_schema.dump(pokemon)
    return jsonify(response)

# ------------------------------------------------------------------------------------------------------------------------------------------->

# Fetch all pokemon
@api.route('/pokemon', methods = ['GET'])
@token_required
def get_pokemon(current_user_token):
    a_user = current_user_token.token
    pokemon = Pokemon.query.filter_by(user_token = a_user).all()
    response = pokemon_schema.dump(pokemon)
    return jsonify(response)

# ------------------------------------------------------------------------------------------------------------------------------------------->

# Fetch a single pokemon
@api.route('/pokemon/<id>', methods = ['GET'])
@token_required
def catch_pokemon(current_user_token, id):
    fan = current_user_token.token
    if fan == current_user_token.token:
        pokemon = Pokemon.query.get(id)
        response = pokemon_schema.dump(pokemon)
        return jsonify(response)
    else:
        return jsonify({"message": "Valid Token Required"}),401


# ------------------------------------------------------------------------------------------------------------------------------------------->

# Update a single pokemon
@api.route('/pokemon/<id>', methods = ['POST','PUT'])
@token_required
def update_pokemon(current_user_token,id):
    pokemon = Pokemon.query.get(id)
    pokemon.number = request.json['number']
    pokemon.name = request.json['name']
    pokemon.ability = request.json['ability']
    pokemon.type = request.json['type']
    pokemon.user_token = current_user_token.token

    db.session.commit()
    response = pokemon_schema.dump(pokemon)
    return jsonify(response)

# ------------------------------------------------------------------------------------------------------------------------------------------->

# Delete a single pokemon
@api.route('/pokemon/<id>', methods = ['DELETE'])
@token_required
def delete_pokemon(current_user_token, id):
    pokemon = Pokemon.query.get(id)
    db.session.delete(pokemon)
    db.session.commit()
    response = pokemon_schema.dump()
    return jsonify(response)
