import express from 'express';

const router = express.Router();

router.post('/register', (req: any, res: any) => {

    console.log(req.app.get('manager'));

    res.json({ message: 'Register route' }).status(200);
});

export default router;