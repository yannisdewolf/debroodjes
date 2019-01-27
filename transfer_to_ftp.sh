#!/bin/bash

LOCAL_SOURCES=./dist/debroodjes
USERNAME=${ftp_user_name}
PASSWORD=${ftp_password}
#HOST=185.182.57.5
HOST=${ftp_host}

echo "starting transfer to: ${HOST}"

#################################
##### delete existing files #####
#################################

echo "start deleting files..."

for f in `curl -l ftp://${USERNAME}:${PASSWORD}@${HOST}/domains/flinkpoyd.be/public_html/debroodjes/backup/`; do

  # Delete each file individually
  echo "deleting $f ..."
  curl -v ftp://${USERNAME}:${PASSWORD}@${HOST}/domains/flinkpoyd.be/public_html/debroodjes/backup/ -Q "DELE domains/flinkpoyd.be/public_html/debroodjes/backup/$f"
  echo "deleted $f"
done

echo "files remotely deleted"

############################
##### upload new files #####
############################

echo "start uploading files"

for fileToUpload in `find ${LOCAL_SOURCES} -maxdepth 1 -type f`; do

  echo ${fileToUpload}
  curl -T ${fileToUpload} ftp://${USERNAME}:${PASSWORD}@${HOST}/domains/flinkpoyd.be/public_html/debroodjes/backup/

done
echo "upload files done"


#curl -T ../dist/debroodjes/assets/.htaccess ftp://${USERNAME}:${PASSWORD}@${HOST}/domains/flinkpoyd.be/public_html/debroodjes/backup/

