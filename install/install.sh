#!bin/bash

#This file needs to be run from the root directory

#Install and start Mongo
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
apt-get update
apt-get install -y mongodb-org
apt-get install -y mongodb-org=3.6.2 mongodb-org-server=3.6.2 mongodb-org-shell=3.6.2 mongodb-org-mongos=3.6.2 mongodb-org-tools=3.6.2
service mongod start

#Install node
apt install -y nodejs
apt install -y npm

#Install packages
npm install

#Add json Data
mongoimport --db QAMDB --collection movies --drop --file ./install/movies.json

#Start API
nodejs index.js
