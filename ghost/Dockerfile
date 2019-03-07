FROM ghost:latest

# install mysql-client and git
RUN echo `pwd` && apt-get update -y --fix-missing && \
    apt-get install -y git mysql-client && \
    rm -rf /var/lib/list/*

ADD wait-for-connect.sh /usr/local/bin/wait-for-connect.sh
ADD config.js config.js

# install qn-store plugin
RUN npm install ghost-qn-store && \
    mkdir -p content/adapters/storage && \
    cp -vR node_modules/ghost-qn-store content/adapters/storage/qn-store

RUN chmod +x /usr/local/bin/wait-for-connect.sh

# install ghost themes
RUN mkdir -p content/themes && \
    git clone https://github.com/kelyvin/caffeine-theme content/themes/caffeine-theme

LABEL maintainer="archervanderwaal <archer.vanderwaal@gmail.com>"