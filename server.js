import express from "express"; 
const app = express (); 

app.get("/new"
, (req, res) => {
    const id=Math.floor(Math.random()*151)+1; //generate random id number
    const game_id= Buffer.from(String(id)).toString("base64");//encode id into game_id 
   
    console.log(id);   //send response 
     res.send(`
        <h1>Pokemon Guessing Game</h1>
        <p>Your game id is: ${game_id} </p>
        <p>You have 5 hints for this game.</p>
   `);
    }); 
app.listen(3000);




