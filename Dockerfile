FROM node:19
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .

ENV VITE_PUBLIC_URL='http://server:8080'
ENV VITE_PUBLIC_URL_FRONTEND='http://localhost:81'
EXPOSE 3000
RUN npm run build
RUN npm ci --omit dev
CMD ["npm", "run", "start"]