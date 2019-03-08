#!/bin/bash
set -e
host="$1"
shift
cmd="$@"
echo $cmd
echo "${MYSQL_USER} ${MYSQL_PASSWORD} ${MYSQL_DATABASE}"
until mysql -hdb -p"3306" -u"${MYSQL_USER}" -p"${MYSQL_PASSWORD}" -D"${MYSQL_DATABASE}" ; do
  >&2 echo "MySQL is unavailable - sleeping"
  sleep 1
done
>&2 echo "MySQL is up - executing command"
echo $@
exec "$@"