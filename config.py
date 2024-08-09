import os
from dotenv import load_dotenv
basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))
class Config():

    FLASK_APP = os.getenv('FLASK_APP')
    FLASK_APP = os.environ.get('FLASK_APP')
    FLASK_DEBUG = os.environ.get('FLASK_DEBUG')
    FLASK_ENV = os.getenv('FLASK_ENV', 'development')
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'It"s gonna be a son of a bisquit!'
    SQLALCHEMY_DATABASE_URI = "postgresql://oebgvzfu:LI5VX5ZvyQeNoMAJLHi1gANoNOvxv-2t@ruby.db.elephantsql.com/oebgvzfu"