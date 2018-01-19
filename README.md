# ARMS Website


#### *[Initial Installation]*
```shell
1. vagrant up
2. [wait ansible]
3. vagrant ssh
4. cd /arms_web
5. finalize_docker
6. [wait docker]
```

#### *[Testing]*
```shell
1. docker-compose run rails rails test
```

#### *[Check API Routing]*
```shell
1. docker-compose run rails rails routes
```

#### *[Check Coding Regulations]*
```shell
1. docker-compose run rails bundle exec rubocop
```

#### *[Check Week Security Check for API server]*
```shell
1. docker-compose run rails bundle exec brakeman
2. docker-compose run rails bundle exec bundle-audit
```

#### *[Refresh all containers]*
```shell
1. ./refresh.sh

```

#### *[Add yarn packages]*
```shell
1. docker-compose run [yarn container] yarn add [pkg_name]

ex)
docker-compose run yarn_front yarn add jquery

```

#### *[Access Servers]*
1. access front server via chrome

```
http://[vagrant_ip]/ or http://[vagrant_ip]:8080
```

2. access services server via chrome

```
http://[vagrant_ip]/services or http://[vagrant_ip]:8081
```

3. access admin server via chrome

```
http://[vagrant_ip]/admin or http://[vagrant_ip]:8082
```

4. access API server via chrome

```
http://[vagrant_ip]:9000
```

*※ http request via postman*

|Action  |Method        |URL                                                |
|--------|--------------|---------------------------------------------------|
| index  | GET          | `http://[vagrant_ip]:9000/v1/[controller_name]`   |
| show   | GET          | `http://[vagrant_ip]:9000/v1/[controller_name]/1` |
| create | POST         | `http://[vagrant_ip]:9000/v1/[controller_name]`   |
| edit   | PUT<br>PATCH | `http://[vagrant_ip]:9000/v1/[controller_name]/1` |
| delete | DELETE       | `http://[vagrant_ip]:9000/v1/[controller_name]/1` |

#### create user

```
curl 192.168.33.15:9000/v1/users --data '{"user": {"email": "hirosige1@gmail.com", "password": "abCD1234"}}' -v -H "Accept: application/json" -H "Content-type: application/json"
```

```json
[postman]

POST [api_url]:9000/v1/users

{
  "user": {
    "email": "hirosige2@gmail.com",
    "password": "abCD1234"
  }
}

```

#### login

```
curl 192.168.33.15:9000/v1/login --data 'email=hirosige1@gmail.com&password=abCD1234'
```

```json
[postman]

POST [api_url]:9000/v1/login

{
  "email": "hirosige2@gmail.com",
  "password": "abCD1234"
}

```

#### kick api with access_token

```
curl 192.168.33.15:9000/v1/news -v -H "Authorization: [YOUR_ACCESS_TOKEN]]"
```

```json
[postman]

GET [api_url]:9000/v1/login

{
  "headers" {
    "Authorization": [YOUR_ACCESS_TOKEN]
  }
}

```

#### Create credentials.env

```
[environments/credentials.env]
SPARKPOST_API_KEY=[SPARKPOST_API_KEY]
```