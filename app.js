const express = require('express');
const app = express();
app.arguments(express.json());

const local_DB = [
    {
        id: Math.floor(Math.random() * 100),
        email: "iidzim@student.1337.ma",
    },
];

app.get("/", (req, res) => {
    return res.status(200).json({ data: local_DB });
});

app.post("/send", (req, res) => {
    const { email } = req.body;
    local_DB.push({ id: Math.floor(Math.random() * 100), email });
    return res.status(201).json({ data: local_DB });
});

app.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const obj = local_DB.find((obj) => obj.id === parseInt(id));
    obj.email = req.body.email;
    return res.status(200).json({ data: local_DB });
});

app.delete("/delete/:id", (req, res) => {
    const i = local_DB.findIndex((obj) => obj.id === parseInt(req.params.id));
    local_DB.splice(i, 1);
    return res.status(200).json({ data: local_DB });
});

module.exports = app;