FROM node:8.11.4-alpine
LABEL maintainer=" RichardWLaub@gmail.com"
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /home/node
COPY package.json .
RUN npm install \
 && apk add --no-cache tini=0.14.0-r0
COPY index.js .
USER node
ENTRYPOINT ["/sbin/tini", "--"]
CMD [ "node", "index.js" ]
