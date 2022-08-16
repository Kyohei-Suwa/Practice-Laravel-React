FROM php:8.0-apache

RUN apt update \
        && apt install -y \
            g++ \
            libicu-dev \
            libpq-dev \
            libzip-dev \
            zip \
            zlib1g-dev \
        && docker-php-ext-install \
            intl \
            opcache \
            pdo \
            pdo_pgsql \
            pgsql

WORKDIR /var/www/laravel_docker

# For composer install
COPY --from=composer /usr/bin/composer /usr/bin/composer

COPY ./src .
RUN composer install

# apache setting
RUN a2enmod rewrite

# npm
RUN apt-get install -y npm
# nodejs
# for LTS version Install
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash
RUN apt-get install -y nodejs

RUN npm install

EXPOSE 80