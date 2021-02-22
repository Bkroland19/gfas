const express = require("express");
const app = express();
// This is your real test secret API key.
const stripe = require("stripe")("sk_test_51HhS8oA8WxtEtjUs0SA5vcokiHImV68q2aiZrq7nJWurLz3ciuPu1Y1eNxq2alzV0AtkAZJVWoDF8S0fb1ofGxGX00WhfvIe6j");
app.use(express.static("."));
app.use(express.json());
const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};
app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd"
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
});
app.listen(4242, () => console.log('Node server listening on port 4242!'));