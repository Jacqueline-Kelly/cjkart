'''
This is a query file. Use the sql_statement variable (line 9) to write 
desired execution statement.
'''
import psycopg2
import os
from dotenv import load_dotenv

# getting environmental variables to access db
load_dotenv()

sql_statement = '''SELECT * from cj_art'''

#establishing the connection
conn = psycopg2.connect(
   database=os.getenv('database'), user=os.getenv('user'),
   password=os.getenv('password'), 
   host=os.getenv('dbhost'), 
   port=os.getenv('port')
)

#Creating a cursor object using the cursor() method
cursor = conn.cursor()
cursor.execute(sql_statement)                    
data = cursor.fetchall()

print(data)

#Closing the connection
conn.close()