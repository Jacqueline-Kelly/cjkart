"""
Create the art table in the database, named as cj_art
"""

import psycopg2
import os
from dotenv import load_dotenv

# getting environmental variables to access db
load_dotenv()

#establishing the connection
conn = psycopg2.connect(
   database=os.getenv('database'), user=os.getenv('user'),
   password=os.getenv('password'), 
   host=os.getenv('dbhost'), 
   port=os.getenv('port')
)

#Creating a cursor object using the cursor() method
cursor = conn.cursor()

cursor.execute("""CREATE TABLE if not exists cj_art
                (id SERIAL PRIMARY KEY, 
                type integer NOT NULL, 
                title varchar(300) NOT NULL, 
                img_src varchar(300) NOT NULL UNIQUE,
                likes integer DEFAULT 0 NOT NULL);
                         """)                   

conn.commit()

#Closing the connection
conn.close()