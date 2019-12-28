# restaurantServer

- It is a restaurant server which is used to search the restaurant based on current localtion, city, location, dishes, average cost of two person,cuisines and name.

- It also consumes message from order management API of restaurant and notify restaurants by email.

**Clustering, Service Discovery, Messaging using RabbitMQ( AQMP ).**

**Technology Used: NodeJS, Express JS, MongoDB, RabbitMQ, PM2, Docker, Consul.**

# How to run this server

**This server is using consul configuration code so first pull the consul image from docker hub by using following command and launch the container**

- docker pull consul
- docker run -d -p 8500:8500 -p 8600:8600/udp --name=badger consul agent -server -ui -node=server-1 -bootstrap-expect=1 -client=0.0.0.0

**Take the IP of consul running container and replace it with config/consul.js at line 21 host IP.**
- Now server is ready to run.

# You can make image of this server by using following command.

- docker build -t restaurant_server .
- docker run -it -d -p 4000:4000 restaurant_server

# You can pull the image from docker hub also.
- https://hub.docker.com/r/imdeepanshu/restaurant_server
- docker pull imdeepanshu/restaurant_server
- To run this container it requires docker consul container running at IP 172.17.0.2 
