FROM node:16.15.1-slim

WORKDIR /app

COPY . /app

CMD [ "npm", "i" ]


