const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const products = [
  {
    id: 1,
    name: "Ves-Vista Sunglasses",
    price: "$120",
    description: "Polarized, fashion-forward shades with customizable lenses.",
    image: "https://vespucci-vista.ca/images/sunglasses.jpg"
  },
  {
    id: 2,
    name: "Ves-Vista Sweater",
    price: "$95",
    description: "Premium cotton-blend sweater with minimalist Ves-Vista logo.",
    image: "https://vespucci-vista.ca/images/sweater.jpg"
  }
];

let waitlist = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/waitlist', (req, res) => {
  const { email } = req.body;
  if (email && !waitlist.includes(email)) {
    waitlist.push(email);
    console.log("New waitlist entry:", email);
    res.status(200).json({ message: 'Email submitted successfully' });
  } else {
    res.status(400).json({ error: 'Invalid or duplicate email' });
  }
});

app.listen(PORT, () => {
  console.log(`VesVista backend running on port ${PORT}`);
});