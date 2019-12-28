# restaurantServer
It  is a restaurant server.

# How to run this server

**This server is using consul configuration code so first pull the consul image from docker hub by using following command and launch the container**

- docker pull consul
- docker run -d -p 8500:8500 -p 8600:8600/udp --name=badger consul agent -server -ui -node=server-1 -bootstrap-expect=1 -client=0.0.0.0

**Take the IP of consul running container and replace it with config/consul.js at line 21 host IP.**
- Now server is ready to run.

# You can make image of this server by using following command.

- docker build -t restaurant_server .
- docker run -it -d -p 4000:4000 restaurant_server

