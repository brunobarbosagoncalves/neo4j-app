import  { resolve } from 'path'

import dotenv from 'dotenv'

dotenv.config({path: resolve('.env')})

import express  from 'express'

import fakeData from './database/createFakeData.js'

const PORT = process.env.PORT 

const app =  express();

app.get('/', async (req, res) =>{

    //create database fake data
    const result = await fakeData()
    
    return res.send(`
    Relations: ${result.records[0].get('relations')}
    Labels: ${result.records[0].get('label')}
    `)

});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})