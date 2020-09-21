FROM node:12.10.0-alpine

RUN mkdir -p /app/node_modules && chown -R node:node /app 

WORKDIR /app

COPY package.json yarn.* ./

RUN npm install

COPY . /app

RUN yarn 

EXPOSE 3333

ENTRYPOINT [ "./init.sh" ]