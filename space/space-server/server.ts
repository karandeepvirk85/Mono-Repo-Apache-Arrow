import express from 'express'
const app = express()
const port = 3001;
import { readFileSync } from 'fs';
import { tableFromIPC } from 'apache-arrow';

const arrow = readFileSync('simple.arrow');
const table = tableFromIPC(arrow);

app.get("/data", (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.json({foo:"bar"});
});

app.listen(port, () => {
    console.log(table.toString());
    console.log(`App is listenig to ${port}`)
})