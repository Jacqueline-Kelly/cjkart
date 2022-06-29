'''
Access images from s3 public bucket 
'''
import boto3
import os
from dotenv import load_dotenv

# getting environmental variables to access db
load_dotenv()

def retrieveImages(region = os.getenv('bucketregion'), bucket_name = os.getenv('bucketname'), folder_marker=os.getenv('bucketfolder')):

    s3client = boto3.client(
        's3',
        region_name=region
    )

    objects = s3client.list_objects(Bucket=bucket_name, Marker=folder_marker)

    object_url_list = dict()

    for i in range (len(objects['Contents'])):
        object_url = f"https://{bucket_name}.s3.{region}.amazonaws.com/{objects['Contents'][i]['Key']}"
        object_url_list[i] = object_url

    return object_url_list

print(retrieveImages())