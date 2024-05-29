// Import dependencies
const express = require('express');
const Razorpay = require('razorpay');
const cors=require('cors')

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// Set up Razorpay with your API keys
const razorpay = new Razorpay({
  key_id: 'rzp_test_7vNaaR9LpOveds',
  key_secret: 'gZpXixpLb3cT78In4xqNmGzQ'
});

// Define a route to initiate payment
app.post('/createPayment', async (req, res) => {
   
    try {
        const { amount, currency } = req.body;
     
        // Create a payment object
        const payment = await razorpay.orders.create({
            
          amount: amount * 100, // Amount in smallest currency unit (in paisa for INR)
          currency: currency,
          receipt: 'receipt_order_74394', // Unique receipt ID
          payment_capture: 1 // Automatically capture payment when created
        });
      
        // Send the payment object to the client
        res.json(payment);
      } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({ error: 'Error creating payment' });
      }
});

// Define a route to handle payment success/failure
app.post('/paymentCallback', (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  // Validate the payment signature
  const isValidSignature = razorpay.utils.verifyPaymentSignature(
    req.json(), // Use rawBody if using body-parser
    razorpay_signature,
    'gZpXixpLb3cT78In4xqNmGzQ'
  );

  if (isValidSignature) {
    // Payment is valid, handle success
    res.send('Payment successful!');
  } else {
    // Payment is not valid, handle failure
    res.status(400).send('Payment failed!');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
