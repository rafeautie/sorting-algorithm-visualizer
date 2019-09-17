FROM node:12.0.0

COPY ./package.json /
COPY ./package-lock.json /

COPY ./server /server
COPY ./build /build

RUN npm install --production

EXPOSE 80

CMD npm run express