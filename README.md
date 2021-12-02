# Simple REST API with ExpressJS, MongoDB

## Installation

### MongoDB

1. [Deploy a new MongoDB cluster.](https://www.mongodb.com/cloud/atlas)
2. Create a new database called "quotes".
3. Create a new collection called "quotes".
4. Make a copy of `.env.example` and call the new file `.env`. Fill in the `MONGODB_URI` value.

## Development

### Run the server

To restart server automatically during development, you can start your server by running

```
npm run dev
```

Otherwise, you can run

```bash
npm start
```

### Make requests

Check out [the Postman collection](https://www.getpostman.com/collections/8bf4cc0f818293e478dd) here.

## Resources

- [Setup tutorial](https://zellwk.com/blog/crud-express-mongodb/)
