const sequelize = require('../config/database')
const {DataTypes} = require('sequelize')
const Region = require('./region')

const district = sequelize.define('district',{
    district_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    district:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

district.belongsTo(Region,{
    foreignKey:{
        name:'region_id',
        allowNull:false
    },
    as:'Region',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})

module.exports = district