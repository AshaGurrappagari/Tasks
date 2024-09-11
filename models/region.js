const sequelize = require('../config/database')
const {DataTypes} = require('sequelize')

const region = sequelize.define('region',{
    region_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    region:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = region