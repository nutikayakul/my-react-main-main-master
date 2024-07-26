const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // เพิ่ม middleware นี้

const places = [
    { name: "Grand Palace", location: "Bangkok", description: "Historical site in Bangkok" },
    { name: "Phuket Beach", location: "Phuket", description: "Beautiful beach in Phuket" },
    { name: "Doi Inthanon", location: "Chiang Mai", description: "Highest mountain in Thailand" }
];

app.get('/api/places', (req, res) => {
    res.json(places);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});