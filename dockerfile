FROM node:alpine
WORKDIR /usr/nodeapp
COPY package*.json ./
RUN npm install pm2 -g
RUN npm install
EXPOSE 4000
COPY . .
CMD [ "pm2-runtime", "./config/ecosystem.config.js"]
