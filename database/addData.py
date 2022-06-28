'''
Adding image data to cj_art table
'''
from retrieveImages import retrieveImages 
import psycopg2
import os
from dotenv import load_dotenv

art_dict_06_22 = dict({
   0:{'type':2, 'title':'CJ'},
   1:{'type':0, 'title':'SightBlinder'}, 
   2:{'type':0, 'title':'Neck Pain'},
   3:{'type':0, 'title':'Fontana'},
   4:{'type':1, 'title':'Goatly Manner'},
   5:{'type':1, 'title':'Libra'},
   6:{'type':1, 'title':'Muscle Mania'},
   7:{'type':1, 'title':'Mango Margot'}
   })

url_dict = retrieveImages()

def dict_add_url(curr_url_dict=url_dict, art_dict=art_dict_06_22):
   for key in art_dict:
      art_dict[key]['img_src'] = curr_url_dict[key]
   return art_dict

def addData(data=dict_add_url()):
   # getting environmental variables to access db
   load_dotenv()

   #establishing the connection
   conn = psycopg2.connect(
      database=os.getenv('database'), 
      user=os.getenv('user'),
      password=os.getenv('password'), 
      host=os.getenv('dbhost'), 
      port=os.getenv('port')
   )

   #Creating a cursor object using the cursor() method
   cursor = conn.cursor()
   for id, image_info in data.items():
      type_val, title, img_src = image_info.values()
      cursor.execute("""INSERT INTO cj_art VALUES
         (DEFAULT, %s, %s, %s, DEFAULT)
         ON CONFLICT (img_src) DO NOTHING
      """, (type_val, title, img_src)
      )

   conn.commit()
   conn.close()
   return

addData()
# data = dict_add_url()
# for id, image_info in data.items():
#    type_val, title, url = image_info.values()
#    print(url)



