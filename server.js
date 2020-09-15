const express =require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

app.use(express.urlencoded({extended:true}));
app.use(express.static("./client/"));
app.use(express.json());


const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);


mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to db instance"))
  .catch(err => console.log(err));

  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
  }

app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`);
});