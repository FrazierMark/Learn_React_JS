const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JeQ98Lu7BrQj7NTf0wBQTOrmsANqExLQlmjy7oIxhqN57CEspmiEChkBeBswHL9zDwqkgQK51GJAQVLv4kq2o0A00mqvHAwap')

// - API


// - App config
const app = express();


// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send ('hello world'))


// - Listen command
exports.api = functions.https.onRequest(app)