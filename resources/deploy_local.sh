#!/usr/bin/env bash


LOCAL_SOURCES=../dist/debroodjes
USERNAME=yannimx273
PASSWORD=zqgkpofc
HOST=185.182.57.5


#################################
##### delete existing files #####
#################################
for f in `curl -l ftp://${USERNAME}:${PASSWORD}@${HOST}/domains/flinkpoyd.be/public_html/debroodjes/backup/`; do

  # Delete each file individually
  echo "deleting $f ..."
  curl -v ftp://${USERNAME}:${PASSWORD}@${HOST}/domains/flinkpoyd.be/public_html/debroodjes/backup/ -Q "DELE domains/flinkpoyd.be/public_html/debroodjes/backup/$f"
  echo "deleted $f"
done

############################
##### upload new files #####
############################
for fileToUpload in `find ${LOCAL_SOURCES} -maxdepth 1 -type f`; do

  echo ${fileToUpload}
  curl -T ${fileToUpload} ftp://${USERNAME}:${PASSWORD}@${HOST}/domains/flinkpoyd.be/public_html/debroodjes/backup/

done


#curl -T ../dist/debroodjes/assets/.htaccess ftp://${USERNAME}:${PASSWORD}@${HOST}/domains/flinkpoyd.be/public_html/debroodjes/backup/

