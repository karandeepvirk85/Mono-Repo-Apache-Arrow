import express from 'express'
const app = express()
const port = 3001;

app.get("/data", (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.json({foo:"bar"});
});

app.listen(port, () => {
    console.log(`App is listenig to ${port}`)
})