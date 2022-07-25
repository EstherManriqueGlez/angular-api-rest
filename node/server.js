const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const methodOverride = require('method-override');
const port = 8080;
mongoose.connect("mongodb://localhost:27017/lista-angular");

const List = mongoose.model("List", {
  text: String,
  finished: Boolean,
});

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
// app.use(express.methodOverride());

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/api/list", (request, response) => {
  List.create(
    {
      text: request.body.text,
    },
    (error, list) => {
      if (error) {
        response.send(error);
      } else {
        List.find((error, list) => {
          if (error) {
            response.send(error);
          } else {
            response.json(list);
          }
        });
      }
    }
  );
});

app.get("/api/list", (request, response) => {
  List.find((error, list) => {
    if (error) {
      response.send(error);
    } else {
      response.json(list);
    }
  });
});

app.delete("/api/list/:item", (request, response) => {
  List.deleteOne(
    {
      _id: request.params.item,
    },
    (error, list) => {
      if (error) {
        response.send(error);
      } else {
        List.find((error, list) => {
          if (error) {
            response.send(error);
          } else {
            response.json(list);
          }
        });
      }
    }
  );
});

app.put("/api/list/:item", (request, response) => {
  List.findOneAndUpdate(
    { _id: request.params.item }, 
    { finished: true },
    (error, list) => {
      if(error) {
        response.send(error);
      } else {
        List.find((error, list) => {
          if(error) {
            response.send(error);
          } else {
            response.json(list);
          }
        })
      }
    }
  );
});

app.listen(8080, () => console.log(`Server started on port ${port}`));
