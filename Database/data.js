const {Sequelize,DataTypes} =  require("sequelize")



const sequelize = new Sequelize("postgresql://postgres.dhbmxlpkqbulzaashpic:2thebay45gg@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres")


sequelize.authenticate()
.then(()=>{
    console.log("Authenticated, Connected")
})

.catch((err)=>{
    console.log("Error" + err)
})


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/bookmodel")(sequelize,DataTypes)
db.users = require("./models/usermodel")(sequelize,DataTypes)

sequelize.sync({alter : false}).then(()=>{
    console.log("Migrated Sucessfully")
})

module.exports = db;






