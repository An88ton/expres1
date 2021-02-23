const {Router} = require("express");
const model = require("../model/todo");

const router = Router();
const userTable = model.user;

router.post("/register", async (req, res) => {
    try{
        console.log(req.body.username);
        const user = await userTable.create({
            username: req.body.username,
            password: req.body.password
        });
        res.status(201).json({user});
    }catch(e){
        console.log(e);
        res.status(500).json({message: "server error"});
    }
});

router.post("/auth", async (req, res) =>{
    try{
        let user = await userTable.findAll(
            {where:{username: req.body.username,
                    password: req.body.password}}
            );
            console.log(user);
            if(user == null) res.status(404).json({message: "Wrong username or password"});
        res.status(201).json(user[0]);
    }catch(e){
        console.log(e);
        res.status(500).json({message: "server error"});
    }
});

module.exports = router;