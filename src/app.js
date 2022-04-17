import express from "express";
import routes from "./routes/persons.routes";

const app =  express()


app.use(express.json())

//routes
app.use(routes)


export default app

