import express from "express"; 
const app = express (); 

const id = Math.floor(Math.random()*151)+1; //generate random id number {question: up to what number does this number generate to?}
const game_id= Buffer.from(String(id)).toString("base64");//encode id into game_id WE CAN COMMENT THIS OUT WHEN WE GET TO BEING ABLE TO GET THE HINTS WORKING */
  /*  const pokemon = await fetch (`https://pokeapi.co/api/v2/pokemon/`);
    const data = await res.json();
    console.log(id)  
     const pokemon_id = async (id) => {
        const pokemon = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const draw_data = await draw_res.json();
        return draw_data.abilite[0];
        //console.log(Object.keys(pokemon));   
    }

     */

app.get("/new" , async (req, res) => {
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);
        const data = await response.json();
        const textMessage = `Your Game ID is ${game_id}`;
        res.json({ message: textmessage, data: data

        });
        
        /* res.send(
        `<h1>Pokemon Guessing Game</h1>
        <p>Your game id is: ${game_id} and ${id} </p>
        <p>You have 5 hints for this game.</p>`*/
    
    } catch (error) {
        res.status(500).json({error: "did not work"});
    }
   // const id=25;
   // console.log(id, game_id);   //send response 
    
 }); 


app.get("/hint/25/1", async (req, res) => {
    try {
       // const {game_id1} = req.params;
        const game_id2 = 25; //Buffer.from(String(game_id1)).toString("base64");
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${game_id2}/`);
        const data = await response.json();
        res.json(data.weight);   

    }  catch (error) {
        res.status(500).json({error: "did not work"});
    }
}); 

app.get("/hint/25/2", async (req, res) => {
    try {
       // const {game_id1} = req.params;
        const game_id2 = 25; //Buffer.from(String(game_id1)).toString("base64");
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${game_id2}/`);
        const data = await response.json();
        res.json(data.stat);   

    }  catch (error) {
        res.status(500).json({error: "did not work"});
    }
}); 

app.listen(3000);

// `https://pokeapi.co/api/v2/pokemon-form/${game_id2}/`use this for guess route

