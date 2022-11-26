const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World with Cloud Run and Cloud Build and Build Trigger');
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
