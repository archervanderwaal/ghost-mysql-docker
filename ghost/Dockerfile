FROM ghost:2.15.0

# install mysql-client and git
RUN apt-get update -y --fix-missing && \
    apt-get install -y git mysql-client && \
    rm -rf /var/lib/list/*

# ENV INSTALL_DIR /var/lib/ghost

COPY ./wait-for-connect.sh /usr/local/bin/wait-for-connect.sh
COPY ./config.production.json /var/lib/ghost/config.production.json
COPY ./config.development.json /var/lib/ghost/config.development.json

# install qn-store plugin
RUN mkdir -p /var/lib/ghost/current/core/server/adapters/storage && \
    cd /var/lib/ghost/current/core/server/adapters/storage && \
    git clone https://github.com/Minwe/qn-store.git && \
    cd qn-store && \
    npm install

RUN chmod +x /usr/local/bin/wait-for-connect.sh

# install ghost themes
# RUN cd ${INSTALL_DIR}/content/themes && \
#     git clone https://github.com/kelyvin/caffeine-theme

LABEL maintainer="archervanderwaal <archer.vanderwaal@gmail.com>"