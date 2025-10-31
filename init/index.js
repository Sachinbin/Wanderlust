const mongoose=require("mongoose");
const initData=require("./data.js")
const List=require("../models/listing.js")


main().then(()=>{
    console.log(`connection successfull`)
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const initDB=async ()=>{
    await List.deleteMany({});
    initData.data=initData.data.map((obj)=>({
      ...obj,
      owner:'689827124f34334090fbb6b5',
    }));
    await List.insertMany(initData.data);
    console.log("dataBase is intialized.")
}

initDB();