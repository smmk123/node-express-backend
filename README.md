# Node.Js + Express.Js RESTful API Server
This is a Node.js Express backend project that provides a robust foundation for building scalable and secure web applications. It incorporates various features and tools to enhance the development process and ensure high code quality. Below you will find an overview of the key features and dependencies used in this project. 

## Features

- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **CI**: continuous integration with [Travis CI](https://travis-ci.org)
- **Docker support**
- **Code coverage**: using [coveralls](https://coveralls.io)
- **Code quality**: with [Codacy](https://www.codacy.com)
- **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)


## Installation

To run this project locally, please follow these steps:

1. Clone the repository: `git clone https://github.com/smmk123/node-express-backend`
2. Navigate to the project directory: `cd node-express-backend`
3. Install the dependencies: `npm install`

## Configuration

Before running the application, you need to set up the configuration. Create a `.env` file in the root directory of the project and define the following variables:

```
PORT=3000
DATABASE_URL=mongodb://localhost:4000/[database_name]

JWT_SECRET=thisisasamplesecret
JWT_ACCESS_EXPIRATION_MINUTES=30
JWT_REFRESH_EXPIRATION_DAYS=30
JWT_RESET_PASSWORD_EXPIRATION_MINUTES=10
JWT_VERIFY_EMAIL_EXPIRATION_MINUTES=10


SMTP_HOST=smtp.mail.mail
SMTP_PORT=587
SMTP_USERNAME=test@mail.mail
SMTP_PASSWORD=password
EMAIL_FROM=test@mail.mail

```

- `PORT`: The port number on which the server will run.
- `DATABASE_URL`: The URL of your MongoDB database.

Make sure to replace `[database_name]` with the actual name of your database.

## Usage

To start the server, run the following command:

```
npm run dev
```

Once the server is running, you can send HTTP requests to the API endpoints.

## API Endpoints

The following endpoints are available in the API:

### Auth Authentication

- `POST /auth/register` Register as user

- `POST /auth/login` Login

- `POST /auth/logout` Logout

- `POST /auth/refresh-tokens` Refresh auth tokens

- `POST /auth/forgot-password` Forgot password

- `POST /auth/reset-password` Reset password

- `POST /auth/send-verification-email` Send verification email

- `POST /auth/verify-email` verify email

### Posts Post Managment and Retreval

- `POST /posts` Create a post

- `GET /posts` Get all posts

### Products Product management and retrieval

- `POST /products` Create a product

- `GET /products` Get all products

### Users User management and retrieval

- `POST /users` Create a user


- `GET /users` Get all users


- `GET /users/{id}` Get a user


- `PATCH /users/{id}` Update a user


- `DELETE /users/{id}` Delete a user


## Development

If you want to make changes or contribute to this project, please follow these guidelines:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your changes: `git checkout -b feature/my-feature`
3. Make your modifications and test them thoroughly.
4. Commit your changes: `git commit -m "Add my feature"`
5. Push the changes to your forked repository: `git push origin feature/my-feature`
6. Open a pull request in the original repository.

## License

This project is licensed under the MIT License.

Special thanks to: [hagopj13](https://github.com/hagopj13/node-express-boilerplate)