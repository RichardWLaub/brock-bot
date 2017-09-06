FROM node:8.4.0-alpine
MAINTAINER RichardWLaub@gmail.com
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /home/node
COPY package.json .
RUN npm install \
 && apk add --no-cache tini
COPY index.js .
USER node
ENTRYPOINT ["/sbin/tini", "--"]
CMD [ "node", "index.js" ]
