# Node app
FROM node:18 as build-stage

RUN rm -rf /usr/src/app/

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

RUN npm run build:style
RUN npm run build

COPY ./src/styles/tailwind.css /usr/src/app/src/styles/custom.css

# Bundle app source
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
ADD ./nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]