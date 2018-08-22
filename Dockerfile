FROM node:latest

WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3100

CMD ["npm" "run" "dev"]
