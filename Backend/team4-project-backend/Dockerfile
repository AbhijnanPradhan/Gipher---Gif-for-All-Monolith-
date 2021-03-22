FROM openjdk:8-jdk-alpine as build

# Set the current working directory inside the image
WORKDIR /app

# Copy maven executable to the image
COPY target/team4-project-backend-0.0.1-SNAPSHOT.jar .

ENTRYPOINT ["java","-jar","team4-project-backend-0.0.1-SNAPSHOT.jar"]