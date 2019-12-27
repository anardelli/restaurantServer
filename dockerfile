FROM node:alpine
WORKDIR /usr/nodeapp
COPY package*.json ./
RUN npm install
EXPOSE 4000
COPY . .
CMD [ "npm", "start"]
