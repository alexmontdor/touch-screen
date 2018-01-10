# http://paislee.io/the-ultimate-nodejs-development-setup-with-docker/
#!/bin/bash

CONTAINER_NAME=NODE_SERVER_DEV  
TEMP_DIR=$(dirname `pwd`)
echo ${TEMP_DIR}
WEBSITE_ASSETS=$(dirname $TEMP_DIR)/public

echo ${WEBSITE_ASSETS}

docker stop ${CONTAINER_NAME}  
docker rm ${CONTAINER_NAME}

docker run -d -p 80:3000 --name ${CONTAINER_NAME} -e "NODE_ENV=development" -v ${WEBSITE_ASSETS}:/static/ -v `pwd`:/app library/node:5.0 /app/scripts/dev_entrypoint.sh  
