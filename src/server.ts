import express from 'express';

const app = express();


app.get("/users", (req, res) => {
  return res.status(200).json({
    msg: "All users"
  });
});

app.post("/users", (req, res) => {
  const { name, surname, lastName } = req.body;
  return res.status(201).json({
    msg: "Data received with success"
  });
});


app.listen(3333, () => {
  console.log("Server is running...");
});
