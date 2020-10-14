import { ApolloServer, gql } from "apollo-server-micro";
import { Resolvers } from "../../../generated";
import { datasource } from "../../../lib/datasource";

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    product: String
  }

  type Product {
    id: ID
    name: String
    price: Int
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID): User

    getAllProducts: [Product]
    getProductById(id: ID): Product
  }
`;

const resolvers: Resolvers = {
  Query: {
    getAllUsers: () => {
      return datasource.getAllUsersFromApi();
    },
    getUserById: (_, args) => {
      return datasource.getUserByIdFromApi(args.id);
    },
    getAllProducts: () => {
      return datasource.getAllProductsFromApi();
    },
    getProductById: (_, args) => {
      return datasource.getProductByIdFromApi(args.id);
    },
  },
  // User: {
  //   product: (parent) => {
  //     return datasource.getProductByIdFromApi(parent.product);
  //   },
  // },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
