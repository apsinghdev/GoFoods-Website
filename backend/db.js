// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://gofoodsdb:UkxdxGeS5kN6OSPw@cluster0.5shrbdt.mongodb.net/gofoodsmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log("Database connected successfully");

//     const fetchedData = await mongoose.connection.db.collection("food_items");

//     const data = await fetchedData.find({}).toArray();
//     global.food_items = data;
//     console.log(global.food_items);
//   } catch (err) {
//     console.error("Database connection failed:", err);
//   }
// };

// console.log("ajeetk");
// module.exports = mongoDB;

const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://gofoodsdb:UkxdxGeS5kN6OSPw@cluster0.5shrbdt.mongodb.net/gofoodsmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Database connected successfully");

    const food_items = mongoose.connection.db.collection("food_items");
    const foodItems = await food_items.find({}).toArray();

    const foodCategory = mongoose.connection.db.collection("foodCategory"); 
    const food_Category = await foodCategory.find({}).toArray();

    

    global.food_items = foodItems;
    global.foodCategory = food_Category;
  } catch (err) {
    console.error("Database connection failed:", err);
  }
};

module.exports = mongoDB;



// async function (err, data) {
//       const foodCategory = await mongoose.connection.db.collection("foodCategory");
//       const catData = await foodCategory
//         .find({})
//         .toArray(function (err, catData) {
//           if (err) console.log(err);
//           else {
//             global.food_items = data;
//             global.foodCategory = catData;
//           }
//         });
//     }