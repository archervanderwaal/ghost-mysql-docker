# ghost-mysql-docker

## Install

```bash
git clone https://github.com/archervanderwaal/ghost-mysql-docker.git
cd ghost-mysql-docker
docker-compose up -d
```

Verify

```bash
[root@VM_69_73_centos ghost-mysql-docker]# docker-compose ps
Name               Command               State            Ports
------------------------------------------------------------------------
db      docker-entrypoint.sh mysqld      Up      3306/tcp, 33060/tcp
ghost   wait-for-connect.sh db --  ...   Up      0.0.0.0:52057->2368/tcp

root@c915222fa042:/# mysql -ublog-user -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 26
Server version: 5.7.25 MySQL Community Server (GPL)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> use blog;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+------------------------+
| Tables_in_blog         |
+------------------------+
| accesstokens           |
| actions                |
| api_keys               |
| app_fields             |
| app_settings           |
| apps                   |
| brute                  |
| client_trusted_domains |
| clients                |
| integrations           |
| invites                |
| members                |
| migrations             |
| migrations_lock        |
| mobiledoc_revisions    |
| permissions            |
| permissions_apps       |
| permissions_roles      |
| permissions_users      |
| posts                  |
| posts_authors          |
| posts_tags             |
| refreshtokens          |
| roles                  |
| roles_users            |
| sessions               |
| settings               |
| subscribers            |
| tags                   |
| users                  |
| webhooks               |
+------------------------+
31 rows in set (0.00 sec)
```

VISIT [${GOHOST_DOMAIN}](http://localhost:52057)

![](https://github.com/archervanderwaal/ghost-mysql-docker/blob/master/snapshots/show.png)

## Configuration

```
cp config.env .env
```
AND
modify config