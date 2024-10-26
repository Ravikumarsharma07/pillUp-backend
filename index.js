import express from "express"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const api_token = process.env.API_TOKEN;

<<<<<<< HEAD
const allowedOrigins = [
  'https://pill-up-clone.vercel.app',
  'http://localhost:3000'  
];

const corsOptions = { 
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions)); 
=======
app.use(cors()); 
>>>>>>> 2fcae6245b442d09bb397b053035a7da8cca89d8

app.get('/api/blogs', async (req, res) => {
    try {
        const response = await fetch('https://api.hubapi.com/content/api/v2/blog-posts', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${api_token}`, 
          },
        });
      
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error('Error fetching data from HubSpot:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from HubSpot' });
      }
      
});


app.listen(port, () => console.log('Server running on port 5000'));
