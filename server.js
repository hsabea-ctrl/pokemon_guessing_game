import express from "express"; 
const app = express (); 


app.get("/"
, (req, res) => {
res.send("GUESSING GAME!");
});
app.listen(3000);







