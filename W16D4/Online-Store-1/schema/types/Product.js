const mongoose = require("mongoose");

const Category = mongoose.model("Category");
const Product = mongoose.model("Product");

const typeDefs = `
  type Product {
      _id: ID!
      name: String!
      description: String!
      category: Category
  }
  extend type Query {
      products: [Product]
  }
`;

const resolvers = {
    Query: {
        products(_, __) {
            return Product.find({});
        }
    },
    Product: {
        category: async (parentValue, _) => {
            const product = await parentValue.populate("category").execPopulate();
            return product.category;
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}