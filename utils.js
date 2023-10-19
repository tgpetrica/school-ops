const {Sequalize, DataTypes} =  require("sequalize");

const database = new Sequalize("ops-school", "root", "", {
    dialect: "mysql",
    host: "localhost",
    logging: false,
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamp: true,
    }
})

const studentsDatabase = database.define(
    "students",
    {
        id: 
        {
            type: DataTypes.INT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        lastName:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    "classes",
    {
        id: 
        {
            type: DataTypes.INT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        code:
        {
            type: DataTypes.STRING,
            allowNull: false,
            
        }
    }
)