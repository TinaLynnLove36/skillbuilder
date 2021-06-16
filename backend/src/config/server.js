const express = require('express');
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.get('/api/skills', (req, res) => {
    console.log(req.headers);
    
    return res.json({skills: [
        {
            title: "Skill1"
        },
        {
            title: "Skill2"
        },
          {
            title: "Skill3"
        },
          {
            title: "Skill4"
        },
          {
            title: "Skill5"
        },
    ]});
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});