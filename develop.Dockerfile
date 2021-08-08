FROM ghcr.io/lolopinto/ent:0.0.21-nodejs-16-dev

WORKDIR /app

COPY . /app

CMD ["node", "--inspect=0.0.0.0", "dist/graphql/index.js"]
