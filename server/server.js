const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('');
    const IBMCollection = db.collection('IBMDaily');
    const AAPLCollection = db.collection('AAPLDaily');
    const GOOGLCollection = db.collection('GOOGLDaily');
    const TSLACollection = db.collection('TSLADaily');
    const AMZNCollection = db.collection('AMZNDaily');
    const IBMRouter = createRouter(IBMCollection);
    const AAPLRouter = createRouter(AAPLCollection);
    const GOOGLRouter = createRouter(GOOGLCollection);
    const TSLARouter = createRouter(TSLACollection);
    const AMZNRouter = createRouter(AMZNCollection);
    app.use('/api/IBM', IBMRouter);
    app.use('/api/AAPL', AAPLRouter);
    app.use('/api/GOOGL', GOOGLRouter);
    app.use('/api/TSLA', TSLARouter);
    app.use('/api/AMZN', AMZNRouter);
  })
  .catch(console.err);

  app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });