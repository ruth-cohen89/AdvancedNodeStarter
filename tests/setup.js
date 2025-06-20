const dotenv = require('dotenv');
dotenv.config({ path: '.env.dev' });

jest.setTimeout(30000);

require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.connect(keys.mongoURI, {
});

afterAll(async () => {
    await mongoose.disconnect();
});