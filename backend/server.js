import express from "express";
import UserRoutes from './routes/UserRoutes'




const cors = require("cors");
const app = express();
const port = 5000;

app.use("/user", userRoutes):
app.use(cors());
app.use(express.json());
app.get("/goals", (req, res) => {
    try {
        const AllGoals = [
        { id: 0, name: "master excel" },
        { id: 1, name: "tackle HTML" },
        { id: 2, name: "review resume tips" },
        { id: 3, name: "practice interview skills" },
        ];
        res.send(AllGoals);
    } catch (error) {
        console.log('goals not found')
    }
})

app.post("/user/register", (req, res) =>{
    const user = { name: "tina" }
    res.send(user)
});
// app.get('/api/skills', (req, res) => {
//     console.log(req.headers);
    
//     return res.json({skills: [
//         {
//             title: "Skill1"
//         },
//         {
//             title: "Skill2"
//         },
//           {
//             title: "Skill3"
//         },
//           {
//             title: "Skill4"
//         },
//           {
//             title: "Skill5"
//         },
//     ]});
// });

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});