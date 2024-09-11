const express= require('express')
const sequelize = require('./config/database')
const {regionData,districtData,wardData,villageData} = require('./controllers/controller')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


sequelize.sync({force:true}).then(async ()=>{
    console.log('Database synced')
 
    await regionData('Mbeya');
 
    app.listen(3000,()=>{
     console.log('server is running')
    })
 })
 .catch(err=>{
     console.log('Database not synced',err)
 })