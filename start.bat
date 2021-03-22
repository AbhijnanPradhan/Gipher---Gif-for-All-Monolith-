docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:5.7
docker run --name some-mongo -d -p 27017:27017 mongo
docker run --name backend -d -p 8080:8080 team4/backend
docker run --name frontend -d -p 80:80 team4/frontend