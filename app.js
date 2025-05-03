const express = require("express")
const bookRoute = require("./routes/bookRoute")
const app = express()

require("./Database/data")
app.use(express.json())


app.use("/api/vooks", bookRoute)


app.listen(3000,function(){
    console.log("server/backend/node project has started at port 3000")
})