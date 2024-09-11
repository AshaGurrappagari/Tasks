const Sequelize = require('sequelize')

const sequelize = new Sequelize('sampleDB','postgres','1234',{
    host:'localhost',
    dialect:'postgres', 
    logging:console.log
})

sequelize.authenticate().then(()=>{
    console.log('Connected to DB')
})
.catch(err=>{
    console.log('Unable to connect to the DB')
})
module.exports = sequelize