FROM ghost:latest

# install mysql-client and git
RUN apt-get update -y --fix-missing && \
    apt-get install mysql-client  -y && \
    rm -rf /var/lib/apt/lists/*

ADD wait-for-connect.sh /usr/local/bin/wait-for-connect.sh
# ADD config.production.json config.production.json

# install qn-store plugin
# RUN gosu node npm install ghost-qn-store && \
#     gosu node mkdir -p content/adapters/storage && \
#     gosu node cp -vR node_modules/ghost-qn-store content/adapters/storage/qn-store

# install ghost themes
# RUN gosu node mkdir -p content/themes && \
#    gosu node git clone https://github.com/kelyvin/caffeine-theme content/themes/caffeine-theme

LABEL maintainer="archervanderwaal <archer.vanderwaal@gmail.com>"
