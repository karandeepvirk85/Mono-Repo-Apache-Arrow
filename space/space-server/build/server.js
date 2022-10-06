"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
const fs_1 = require("fs");
const apache_arrow_1 = require("apache-arrow");
const arrow = (0, fs_1.readFileSync)('simple.arrow');
const table = (0, apache_arrow_1.tableFromIPC)(arrow);
app.get("/data", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ foo: "bar" });
});
app.listen(port, () => {
    console.log("HELLO");
    console.log(`App is listenig to ${port}`);
});
