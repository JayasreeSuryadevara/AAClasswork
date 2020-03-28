const mongoose = require("mongoose");
const User = mongoose.model("User");
const Order = mongoose.model("Order");

const typeDefs = `
    type User {
        _id: ID!
        email: String!
        orders: [Order]
    },
    type UserCredentials {
        _id: ID!
        email: String!
        orders: [Order]
        token: String!
    }
    extend type Mutation {
        signup(email: String, password: String): UserCredentials
    }
    type Query {
        users: [User]
    }
`;

const resolvers = {
    Query: {
        users(_, __) {
            return User.find({ });
        }
    },
    User: {
        orders(parentValue, _) {
            const user = parentValue;
            return Order.find({ user: user._id });
        },
    },
    Mutation: {
        signup(_, {email, password }) {
            const user = User.signUp(email, password);
            return user;
        }
    }
};

module.exports = {
    typeDefs,
    resolvers
}
