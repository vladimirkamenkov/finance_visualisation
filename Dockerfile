# Name the node stage "builder"
FROM node:10 AS builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build

# nginx state for serving content
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]


# docker build -t finvisual .
# docker run -d --rm -it -p 80:80 --name finvisual finvisual