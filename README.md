### codeeducation - docker-compose-nginx-nodejs

```bash
$ docker-compose up -d
```

```bash
~/apps/node-hello-docker> docker-compose up -d
Creating db ... done
Creating app ... done
Creating nginx ... done

~/apps/node-hello-docker> curl -i localhost:8080    
HTTP/1.1 200 OK
Server: nginx/1.15.0
Date: Sun, 14 Mar 2021 13:17:46 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 58
Connection: keep-alive
X-Powered-By: Express
ETag: W/"3a-sU+yxJH98FD1OrLBqgt3RfWA8g8"

<h1>Full Cycle Rocks!</h1><ul><li>Rodolfo Moraes</li></ul>
```