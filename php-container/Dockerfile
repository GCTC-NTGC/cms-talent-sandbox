FROM php:7.4-apache
COPY src/ /var/www/html/
COPY ../lumen-react /var/www/html/lumen-react
COPY ../lumen-graphql /var/www/html/lumen-graphql


# FROM appsvc/php
# RUN echo "## Look I modififed a file!" >> /etc/apache2/apache2.conf
# COPY ./apache2.conf /etc/apache2/
# COPY ./src/my-v-hosts /etc/apache2/virtual-hosts
# COPY ../lumen-react /home/site/wwwroot/lumen-react
# COPY ../lumen-graphql /home/site/wwwroot/lumen-graphql
# RUN make /app
# CMD cd lumen-react &&
