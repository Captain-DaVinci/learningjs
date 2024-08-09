const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const ShoppingTask = require("./models/ShoppingTask");

app.use("/static", express.static("public"));

app.set("view engine", "ejs");

// GET METHOD
app.get("/", (req, res) => {
  const findShoppingtasks = async () => {
    try {
      ShoppingTask.find().then((tasks) =>
        res.render("shopping.ejs", { ShoppingTasks: tasks })
      );
    } catch (err) {
      console.log(err);
    }
  };
  findShoppingtasks();

  //   ShoppingTask.find({}, (err, tasks) => {});
});

app.use(express.urlencoded({ extended: true }));

//POST METHOD
app.post("/", async (req, res) => {
  console.log(req.body);
  const shoppingTask = new ShoppingTask({
    content: req.body.content,
  });

  try {
    await shoppingTask.save();
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
  }
});

//UPDATE
app
  .route("/edit/:id")
  .get((req, res) => {
    const id = req.params.id;
    ShoppingTask.find().then((tasks) =>
      res.render("shoppingEdit.ejs", { ShoppingTasks: tasks, idTask: id })
    );
  })
  .post((req, res) => {
    const id = req.params.id;
    ShoppingTask.findByIdAndUpdate(id, { content: req.body.content }).then(
      res.redirect("/")
    );
  });

const mongoose = require("mongoose");

//DELETE
app.route("/remove/:id").get((req, res) => {
  const id = req.params.id;
  ShoppingTask.findByIdAndDelete(id).then(res.redirect("/"));
});



const connectToMongo = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });
    console.log("Mongo connected");
    app.listen(3000, () => console.log("Server Up and running"));
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

connectToMongo();
