let express = require("express");
const cors = require("cors");

const app = express();
let port = 8000;
/* middleware */
app.use(express.json());
app.use(cors({ origin: true }));






app.get("/", (req, res) => {
  res.json("good start");
});





app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is runing on port ${port} `);
});
