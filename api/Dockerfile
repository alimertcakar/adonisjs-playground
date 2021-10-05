FROM node:14-alpine
WORKDIR /usr/src/services/api
COPY package*.json ./
COPY .env ./
RUN npm install
# Add node_modules to the envionmental path variable so we can run binaries easily
ENV PATH /usr/src/services/api/node_modules/.bin:$PATH
USER root
# Install the good ol' NPM modules and get Adonis CLI in the game
RUN npm install --no-optional
# We'll use PM2 as a process manager for our Node server
RUN npm i -g pm2
# If you are building your code for production
# RUN npm ci --only=production
COPY . .
EXPOSE 3333
# CMD npx ts-node-dev ./src/index.ts
CMD npm run pm2:start
