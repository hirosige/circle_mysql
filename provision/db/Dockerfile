FROM mysql:5.7

# インクルード用のディレクトリ内を削除
RUN rm -f /etc/mysql/conf.d/mysql.cnf
RUN rm -f /etc/mysql/conf.d/admin.cnf

RUN chown -R mysql:root /var/lib/mysql/

# Nginxの設定ファイルをコンテナにコピー
ADD mysql.cnf /etc/mysql/conf.d/mysql.cnf
ADD admin.cnf /etc/mysql/conf.d/admin.cnf

CMD ["mysqld"]
EXPOSE 3306