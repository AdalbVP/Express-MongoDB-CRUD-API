const router = require('express').Router();
const User = require ('../model/User');

//validacion de datos
const Joi = require('joi');

 const schema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(255).required()
 });

 const { error } = schema.validate(req.body);

router.post('/register',async (req,res) => {

    //validacion de datos antes de crear un usuario
    const validation = Joi.validate(req.body, schema);
res.send(validation);

    // const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });
    // try{
    //     const savedUser = await user.save();
    //     res.send(savedUser);
    // }catch(err){
    //     res.status(400).send(err);
    // }
});

module.exports = router;
