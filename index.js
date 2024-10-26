import express from "express"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const api_token = process.env.API_TOKEN;

app.use(cors()); 

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
