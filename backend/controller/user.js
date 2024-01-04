import Users from "../model/model.js";
import argon2 from "argon2"

export const postLogin = async(req, res) =>{
    try {
        const login = await Users.findOne({
            where:{
                username : req.body.username
            }
        })
        if(!login) return res.status(404).json({msg: "username not found"})
        const verifPass= await argon2.verify(login.password, req.body.password)
        if(!verifPass) return res.status(401).json({msg : "Invalid Password"})
        res.status(200).json({username : login.username, name : login.name, email : login.email})
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

export const getUsers = async(req, res) =>{
    try {
        const get = await Users.findAll({
            attributes: ['userid', 'username', 'name', 'email']
        })
        res.status(200).json(get)
    } catch (error) {
        res.status(500),json({msg : error})
    }
}

export const postUsers = async(req, res) =>{
    const {username, password, name, email} = req.body 
    const hash = await argon2.hash(password)
    try {
        const user = await Users.create({
            username : username,
            password : hash,
            name : name,
            email : email
        })
        res.status(201).json({userid: user.userid})
    } catch (error) {
        res.status(400).json({msg: error})
    }
}