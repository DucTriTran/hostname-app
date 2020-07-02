# hostname-app

A demo app that returns its hostname and version when being accessed port 80

## Running locally

`npm install`

`node server.js`

## Creating Dockerfile
`docker build -t [docker-hub-username]/hostname-app .`

`docker push [docker-hub-username]/hostname-app`