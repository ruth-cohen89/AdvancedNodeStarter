# AdvancedNodeStarter

A starter project for the *Advanced Node.js* course on Udemy

### Environment Variables Setup

This project uses environment variables to manage sensitive data and configuration.
- Copy the example environment file `cp .env.example .env.dev`
- Edit the .env.dev file and fill in your own values.


### Project Setup

- Run `npm install` in the root of the project to install server dependencies
- Change into the client directory and run `npm install --legacy-peer-deps`
- Make sure Redis is installed on your system (install it according to your OS)
- Open a new terminal window/tab and start the Redis server by running `redis-server`
- Go back to the original terminal, change back into the root of the project and run `npm run dev` to start both the server and the client
- Access the application at `localhost:3000` in your browser


**Important:**
- Without starting the Redis server, the app will not be able to connect to it and will not load data properly.


**Passport Package Version Notice:**

This project uses an older version of Passport (v0.5.3) to ensure compatibility with `cookie-session`.

The `express-session` package is a more advanced and flexible session middleware compared to `cookie-session`.

If you replace `cookie-session` with `express-session`, the login tests will no longer work without modifications.

In that case, you will need to redesign your testing strategy for authentication to accommodate the change.

















