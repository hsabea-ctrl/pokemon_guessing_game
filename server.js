import express from "express"; 
const app = express (); 


const id= 25;
const game_id= Buffer.from(String(id)).toString("base64");


app.get("/"
, (req, res) => {
//res.send("GUESSING GAME!");
res.send(`Your game id is: ${game_id}`); 

});
app.listen(3000);




