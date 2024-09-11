const {DataTypes}= require('sequelize')
const sequelize = require('../config/database')
const District = require('./district')
const Ward = require('./ward')
const Region = require('./region')

const village = sequelize.define('village',{
    village_id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    region:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    district:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    ward:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    village:{
        type:DataTypes.STRING,
        allowNull:false
    },
    minCurrent:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'Min(Current)'
    },
    maxCurrent:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"Max(Current)"
    },
    minLast:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"Min(Last)"
    },
    maxLast:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"Max(Last)"
    },
    crop:{
        type:DataTypes.STRING,
        allowNull:false
    },
    variety:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

village.belongsTo(Region,{
    foreignKey:{
        name:'region_id',
        allowNull:false
    },
    as:'Region',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})

village.belongsTo(District,{
    foreignKey:{
        name:'district_id',
        allowNull:false
    },
    as:'District',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
village.belongsTo(Ward,{
    foreignKey:{
        name:'ward_id',
        allowNull:false
    },
    as:'Ward',
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})

module.exports = village