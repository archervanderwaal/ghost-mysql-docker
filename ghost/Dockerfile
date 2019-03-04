FROM ghost

# install mysql-client and git
RUN apt-get update -y && \
    apt-get install -y mysql-client git && \
    rm -rf /var/lib/list/*

ENV INSTALL_DIR /var/lib/ghost

COPY ./wait-for-it.sh /usr/local/bin/wait-for-it.sh

COPY ./config.development.json ./config.development.json
COPY ./config.production.json ./config.production.json

# install qn-store plugin
RUN mkdir -p ${INSTALL_DIR}/content/adapters/storage && cd ${INSTALL_DIR}/content/adapters/storage && \
    git clone https://github.com/Minwe/qn-store.git && \
    cd qn-store && \
    npm install

# install ghost themes
RUN cd /var/lib/ghost/content/themes && \
    git https://github.com/kelyvin/caffeine-theme

LABEL maintainer="archervanderwaal <archer.vanderwaal@gmail.com>"