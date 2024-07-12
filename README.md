# WhizStream Frontent Setup

## Docker

### development

- Run this below command to make a image

```sh
docker build -t react-app-dev -f Dockerfile.dev .
```

- Start the Container using this command

```sh
docker run -it -d -p 3000:3000 -v $(pwd):/app react-app-dev
```

### Production

- Run this command to create a image

```sh
docker build -t react-app-prod -f Dockerfile.prod .
```

- Run this command to start the container

```sh
docker run -it -d -p 80:80 react-app-prod
```

## Docker Compose

### Docker Compose Development

```sh
docker-compose -f docker-compose.dev.yml up
```

### Docker Compose Production

```sh
docker-compose -f docker-compose.prod.yml up
```
