#!/bin/bash
read -r -p "DB will be removed. Are you sure? [y/N] " response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]
then
    docker container stop nodejs_template_postgres
    docker container rm nodejs_template_postgres

    docker volume rm nodejs_template_my_dbdata

    echo 'DB was removed.'
fi

function pause(){
   read -p "$*"
}

pause 'Press any key to continue...'