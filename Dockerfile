FROM --platform=linux/arm64/v8 node:18.10-alpine3.15 as builder

WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM --platform=linux/arm64/v8 nginx:stable-alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
