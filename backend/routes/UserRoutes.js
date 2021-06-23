import express from 'express'
import {body, validationResult} from 'express-validator';

const router = express.Router()

router.post("/user/register", (req, res) => {
    const user = { name: "tina" };
    res.send(user);
});

export default router;