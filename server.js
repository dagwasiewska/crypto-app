const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json())
app.use('/login', (req, res) => {
  const username = req.body?.username
  const password = req.body?.password

  if (username === 'root' && password === 'wordpress') {
    res.send({
      token: 'test123'
    })
  } else {
    res.send({
      errorMessage: 'Either username or password wrong'
    })
  }
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

