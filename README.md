## Dependencies 🧐
- @vinejs/vine: Provides schema-based data validation, ensuring that inputs are correctly formatted and meet the application's requirements.
- bcryptjs: Library for hashing passwords, enhancing security by protecting sensitive data with secure hashing algorithms.
- dotenv: Loads environment variables from a .env file into process.env, allowing configuration to be securely separated from code.
- express: Fast, unopinionated Node.js framework for building APIs and web applications, widely used for its simplicity and extensibility.
- mysql: MySQL client for Node.js, allowing direct interactions with a MySQL database.
- typeorm: Object-Relational Mapping (ORM) library that simplifies database operations and query building, providing support for TypeScript and JavaScript.

## Development Dependencies
- chai: Assertion library that integrates with Mocha, providing expressive, readable assertions for test cases.
- chai-http: Middleware for Chai that enables HTTP integration testing, allowing you to test API endpoints.
- mocha: JavaScript testing framework that provides a structured, asynchronous testing environment.

## Available Scripts
dev: Starts the server in development mode using node --watch src/index.js, automatically reloading on code changes for easier development.
test: Runs all test cases using Mocha to validate the application's functionality and catch any errors.


## To install dependencies, run:
```bash
npm install
```

## Create migrations 🛹
```bash
npx typeorm migration:create src/migrations/name_migrations --outputJs 
```

## Run migrations 🏂
```bash
npx typeorm migration:run -d src/config/typeorm.config.js
```

## Run application 🏃‍♂️‍➡️
```bash
npm run dev
```

## Run test 🧪
```bash
npm run dev
```

