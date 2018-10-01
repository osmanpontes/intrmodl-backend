# Intrmodl Backend

# Dependencies

You need to install:
  - [Node](https://github.com/creationix/nvm)
  - [Yarn](https://yarnpkg.com)
  - [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/)

# Development

## Setup

At project folder:

```sh
cd path/to/project
```

Install dependencies:

```sh
yarn
```

To have postgres up and running:

```sh
docker-compose up
```

Execute migrations:

```sh
NODE_ENV=development yarn db:migrate
```

Execute seed:

```sh
NODE_ENV=development yarn db:seed
```

## Development Server

Auto reload server:

```sh
yarn dev
```

## Running tests

Running once:

```sh
yarn test
```

Running in watch mode:

```sh
yarn test:watch
```

## Utilities

### Undo migration:

```sh
NODE_ENV=development yarn db:migrate:undo
```

### Verify if your code is passing on Linter:

```sh
yarn lint
```

### Auto fix Linter:

```sh
yarn lint:fix
```

# Production

## Running server

```sh
# load environment variables first
yarn start
```
