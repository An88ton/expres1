const express = require("express");
const path = require("path");
const sequelize = require("./utils/database");
const toDo = require("./routes/toDo");
const register = require("./routes/users");
const PORT = 3000;
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use("/security", register);
app.use("/api/todo", toDo);

app.use((req, res, next) =>{
    res.sendFile("/index.html");
    next();
});



async function start() {
    try{
        await sequelize.sync({force: false}); //force: true means that if we delete column here it will be deleted in db also
        app.listen(PORT);
    }catch(e){
        console.log(e);
    }
}

start();
