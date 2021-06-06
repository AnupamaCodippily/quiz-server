const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.send("Hello World")
})

app.listen(PORT, console.log("Server is running"))
