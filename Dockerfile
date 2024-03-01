FROM node:18.10-alpine3.15 as builder

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY .nginxssl/certificate.crt /etc/nginx/ssl/
COPY .nginxssl/privkey.key /etc/nginx/ssl/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
