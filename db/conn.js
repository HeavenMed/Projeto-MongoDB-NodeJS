const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/testemongodb2" //testemongodb2 é o nome do banco
const client = new MongoClient(uri);
async function run() {
    try{
        await client.connect()
        console.log("Conectando ao mongodb")
    }
    catch(err){
        console.log(err)
    }
}
run()
module.exports = client

