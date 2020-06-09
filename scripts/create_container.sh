#!/bin/bash
cd ..
docker-compose up -d

function pause(){
   read -p "$*"
}

pause 'Press any key to continue...'