const mongoose = require("mongoose");

const Order = mongoose.model("Order");
const User = mongoose.model("User");
const Product = mongoose.model("Product");

const typeDefs = `
  type Order {
      _id: ID!
      products: [Product]
      user: User
  }
  extend type Query {
      orders: [Order]
  }
`;

const resolvers = {
    Query: {
        orders(_, __) {
            return Order.find({});
        }
    },
    Order: {
        user: async (parentValue, _) => {
            const order = await parentValue.populate('user').execPopulate();
            return order.user;
        },
        products: async (parentValue, _) => {
            const order = await parentValue.populate('products').execPopulate();
            return order.products;
        }
    }  
}

module.exports = {
    typeDefs,
    resolvers
}