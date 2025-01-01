FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80 77

CMD [ "nginx", "-g", "daemon off;" ]
