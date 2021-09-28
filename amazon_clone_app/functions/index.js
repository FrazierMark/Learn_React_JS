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
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    
    console.log('Payment Request Recieved - RIGHT?!! for this amount >>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    // Created something - everything OK
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})


// - Listen command
exports.api = functions.https.onRequest(app)

//local endpoint 
// http://localhost:5001/clone-app-da065/us-central1/api