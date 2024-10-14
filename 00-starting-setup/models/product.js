const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,

    allowNull: false,
    primaryKey: true,
  },

  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
// old code ----------------

// const Cart = require("./cart");
// const db = require("../util/database");

// // const fs = require("fs");
// // const path = require("path");

// // old database in a file
// // const p = path.join(
// //   path.dirname(process.mainModule.filename),
// //   "data",
// //   "products.json"
// // );

// // const getProductsFromFile = (cb) => {
// //   fs.readFile(p, (err, fileContent) => {
// //     if (err) {
// //       cb([]);
// //     } else {
// //       cb(JSON.parse(fileContent));
// //     }
// //   });
// // };

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   static fetchAll() {
//     return db.execute("SELECT * FROM products");
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO products (title, price, imageUrl, description) VALUES(?, ?, ?, ?)",
//       [this.title, this.price, this.imageUrl, this.description]
//     );
//   }

//   static findById(id) {
//     return db.execute("SELECT * FROM products where products.id = ?", [id]);
//   }
//   // get rid of old code

//   // save() {
//   //   getProductsFromFile((products) => {
//   //     if (this.id) {
//   //       const existingProductIndex = products.findIndex(
//   //         (p) => p.id === this.id
//   //       );

//   //       const updatedProducts = [...products];
//   //       updatedProducts[existingProductIndex] = this;

//   //       fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//   //         console.log(err);
//   //       });
//   //     } else {
//   //       this.id = Math.random().toString();
//   //       products.push(this);
//   //       fs.writeFile(p, JSON.stringify(products), (err) => {
//   //         console.log(err);
//   //       });
//   //     }
//   //   });
//   // }

//   // static deleteById(id) {
//   //   getProductsFromFile((products) => {
//   //     const product = products.find((p) => p.id === id);

//   //     const updatedProducts = products.filter((p) => p.id !== id);
//   //     fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//   //       if (!err) {
//   //         Cart.deleteProduct(id, product.price);
//   //       }
//   //       console.log(err);
//   //     });
//   //   });
//   // }

//   // static fetchAll(cb) {
//   //   getProductsFromFile(cb);
//   // }

//   // static findById(id, cb) {
//   //   getProductsFromFile((products) => {
//   //     const product = products.find((p) => p.id === id);
//   //     cb(product);
//   //   });
//   // }
// };
