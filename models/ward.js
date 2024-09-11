const sequelize = require('../config/database')
const {DataTypes} = require('sequelize')
const District = require('./district')

const ward = sequelize.define('ward',{
    ward_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    ward:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

ward.belongsTo(District,{
    foreignKey:{
        name:'district_id',
        allowNull:false
    },
    as:"District",
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})

module.exports = ward