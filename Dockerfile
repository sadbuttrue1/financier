FROM node:8 AS Stage1

WORKDIR /app

ADD . /app

RUN npm install
RUN npm run build


FROM node:8 AS Stage 2

WORKDIR /financier
RUN npm install express@^4.13.0 helmet@^3.10.0 uuid helmet-csp@^2.7.0 cheerio@^0.22.0

COPY --from=Stage1 /app/dist .
COPY --from=Stage1 /app/docs . 
# ADD ./dist /financier/dist
# ADD ./docs /financier/docs
ADD ./api /financier/api

WORKDIR /financier/api

EXPOSE 8080

# RUN apt-get install -y git-core

CMD node ./index.js
