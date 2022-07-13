const express = require('express')
const app = express()
app.use('/', (req, res) => {
 res.send('Hello World desde la api').status(200);
})
app.listen(3000);
