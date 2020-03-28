const mongoose = require("mongoose");
const Category = mongoose.model("Category");
const Product = mongoose.model("Product");


const typeDefs = `
  type Category {
    _id: ID!
    name: String!
    products: [Product]
  }
  extend type Query {
    categories: [Category]
  }
`;

const resolvers = {
  Query: {
    categories(_, __) {
      return Category.find({});
    }
  },
  Category: {
    products(parentValue, _) {
        const category = parentValue;
        return Product.find({ category: category._id })
    }
  }
}

module.exports = {
    typeDefs,
    resolvers
}