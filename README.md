Website to display CJ Kelly's artwork. Authored by Jacqueline Kelly.

React front-end with select CSS classes taken from 'React Front to Back 2022' on Udemy by Brad Traversy. 

Data is hosted on AWS in a Postgres RDS. Lambda functions written in python allow access to the Postgres database to retrieve and update files. Lambda layers use the aws-psycopg2 library to execute psql commands. An AWS Gateway API function is configured with the lambda functions to POST and GET data. Calls from the front-end files to the API activate the lambda functions and communicate with database. 
