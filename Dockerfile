FROM node:14-alpine

WORKDIR /app 

copy src ./src

copy package*.json ./
COPY tsconfig.json ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]