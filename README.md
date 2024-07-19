# Emailer Project

This project demonstrates sending emails using Node.js, TypeScript, and Express with Nodemailer and environment variables managed by dotenv.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd emailer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Gmail app password:
   ```
   EMAIL=your-email@gmail.com
   APP_PASSWORD=your-app-password
   ```

## Usage

### Build TypeScript

Compile TypeScript to JavaScript using:
```bash
npm run build
```

### Start Server

Run the server using:
```bash
npm start
```

For development with automatic restarts (using nodemon):
```bash
npm run dev
```

## Scripts

- `npm start`: Starts the server (runs `node dist/server.js`).
- `npm run build`: Compiles TypeScript to JavaScript.
- `npm run dev`: Starts the server with automatic restarts (requires nodemon).
- `npm test`: Placeholder for testing scripts.

## Dependencies

- **Express**: Web framework for Node.js.
- **Nodemailer**: Module for sending emails.
- **dotenv**: Loads environment variables from a `.env` file.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **@types/express**, **@types/node**, **@types/nodemailer**: TypeScript type definitions for Express, Node.js, and Nodemailer.
- **body-parser**: Middleware to parse incoming request bodies in Express.
- **tslint**: TypeScript linter.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
