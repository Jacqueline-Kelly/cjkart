Website to display CJ Kelly's artwork, hosted by AWS Amplify- Check it out here!

https://cjk-art.com

Authored by Jacqueline Kelly.

All of the website data is hosted on AWS in a Postgres RDS. The images are stored in an S3 bucket which is accessed by the database using boto3 (aws-sdk for python). Lambda functions written in python allow access to the Postgres database to retrieve and update data. Lambda layers use the aws-psycopg2 library to execute psql commands. An AWS Gateway API function is configured with the lambda functions to POST and GET data. Calls from the front-end files to the API activate the lambda functions and communicate with database. The front-end is built with React, with select CSS classes taken from 'React Front to Back 2022' course on Udemy by Brad Traversy. The contact pages uses Formspark to forward messages to the artist. It also utilizes google-recaptcha for react to ensure bots don't spam the artist's email.

Next in development is to remove in-line styling and create css classes, as well as adjust layouts for mobile and different screen sizes.
