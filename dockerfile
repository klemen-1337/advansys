FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Added dockerignore to ignore node_modules, would also be nice to only copy app dir and other required files.
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]