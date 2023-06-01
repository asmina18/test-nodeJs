import express from 'express'
import { postRouter } from './routes/post.router.js';
const app = express()

app.get("/", (req, res) => {
    res.send("Velkommen til min NodeJS app");
})

app.use(postRouter)

app.use((req,res, next) => {
    res.status(404).send("<h1>fejl 404</h1>")
})

app.listen(3000)

