const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Food Category Schema
const CategorySchema = new Schema({
  id: { type: String, required: true, unique: true },
  main_title: { type: String, required: true },
  included: { type: String, required: true },
  main_img: { type: String, required: true },
  menu: [
    {
      id: { type: String, required: true, unique: true },
      title: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String, required: true },
      ingredient: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
});

// Food Schema
const FoodSchema = new Schema({
  id: { type: String, required: true, unique: true },
  main_title: { type: String, required: true },
  included: { type: String, required: true },
  main_img: { type: String, required: true },
  menu: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
});

// Food Category Model
const Category = mongoose.model('Category', CategorySchema);

// Food Model
const Food = mongoose.model('Food', FoodSchema);

// Function to add data to the database
const addDataToDatabase = async (foodData) => {
  try {
    // Create categories
    const categories = foodData.food.map((item) => {
      return new Category({
        id: item.id,
        main_title: item.main_title,
        included: item.included,
        main_img: item.main_img,
        menu: item.menu,
      });
    });

    // Save categories to the database
    await Category.insertMany(categories);

    // Create food
    const food = new Food({
      id: 'f1',
      main_title: 'PIZZOR',
      included: 'ost och tomatsäs',
      main_img: 'https://thomassixt.com/wp-content/uploads/sites/2/2023/06/pizza-capriciosa-580x325.jpg',
      menu: categories.map((item) => item._id),
    });

    // Save food to the database
    await food.save();

    console.log('Data added to the database successfully');
  } catch (error) {
    console.error('Error adding data to the database:', error);
  }
};

// Call the function with your JSON data
// addDataToDatabase({
//   food: [
//     {
//       id: 'f1',
//       main_title: 'PIZZOR',
//       included: 'ost och tomatsäs',
//       main_img: 'https://thomassixt.com/wp-content/uploads/sites/2/2023/06/pizza-capriciosa-580x325.jpg',
//       menu: [
//         {
//           id: 'f1-1',
//           title: 'MARGHERITA',
//           price: 85,
//           category: 'PIZZOR',
//           ingredient: '',
//           image: 'https://www.blossmangas.com/wp-content/uploads/2021/05/Margherita-pizza-2.jpg',
//         },
//       ],
//     },
//     {
//       id: 'f2',
//       main_title: 'INBAKADE PIZZOR',
//       included: 'ost och tomatsäs',
//       main_img: 'https://thomassixt.com/wp-content/uploads/sites/2/2023/06/pizza-capriciosa-580x325.jpg',
//       menu: [
//         {
//           id: 'f2-1',
//           title: 'CALZONE',
//           price: 92,
//          `category: 'INBAKADE PIZZOR',
//           ingredient: 'Skinka',
//           image: 'https://www.blossmangas.com/wp-content/uploads/2021/05/Margherita-pizza-2.jpg',
//         },
//       ],
//     },
//   ],
// });