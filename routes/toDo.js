const {Router} = require("express");
const model = require("../model/todo");

const userTable = model.user;
const todo = model.todo;
const router = Router();


router.get('/:id', async (req, res) => {
    try{
        const todos = await todo.findAll({where:{UserId: +req.params.id}});
        res.status(200).json(todos);
    }catch(e){
        res.status(500).json({message: "Server error"});
    }
});

router.post('/:id', async (req, res) => {
    try{
       //const user = userTable.findByPk(+req.params.id);
       const item = await todo.create({
            title: req.body.title,
            done: false,
            date: new Date(),
            UserId: (+req.params.id)
        });
        console.log("here1");
        res.status(201).json({item});
    }catch(e){
        res.status(500).json({message: "Server error"});
        console.log(e);
    }
});

router.put('/:id', async (req, res) => {
    try{
        const item = await todo.findByPk(+req.params.id);
        console.log(item);
        item.done = req.body.done;
        await item.save();
        res.status(200).json({item});
        console.log(4);
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Server error"})
    }
});

router.delete('/:id', async (req, res) => {
    try{
        await todo.destroy({
            where: {
                id: (+req.params.id)
            }
        });
        res.sendStatus(204);
    }catch(e){
        res.status(500).json({message: "Server error"});
    }
});

module.exports = router;