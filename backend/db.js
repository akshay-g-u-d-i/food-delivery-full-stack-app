const mongoose = require('mongoose');
const mongouri = 'mongodb+srv://gudiakshay28:98765432@cluster0.sszfgwv.mongodb.net/mernapp?retryWrites=true&w=majority'

const connectDB = async () => {

    mongoose.connect(mongouri, { useNewUrlParser: true }, async (err, result) => {

        if (err) console.log("Error in connection --", err)
        else {
            console.log('Connected suceesfully');
            const fetch = mongoose.connection.db.collection("foodData");
            fetch.find({}).toArray(async function (err, data) {

                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {

                    if (err) console.log(err);
                    else 
                    {
                        global.foodData = data;
                        global.foodCategory = catData;
                    }

                })

            })
        }
    });

}



// var db

// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         var res = mongoose.connect(mongouri, {useNewUrlParser: true})
//         console.log('Connection established')


//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }
// mongoose.connect(mongouri).then()

module.exports = connectDB;