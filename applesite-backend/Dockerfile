FROM node:10-slim
WORKDIR /app
COPY package.json /app
RUN npm install --only=prod
COPY . /app
CMD ["node", "./src/app.js"]