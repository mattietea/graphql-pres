import { gql } from "@apollo/client";

export const GRAPHQL = gql`
  query GetAllUsers {
    getAllUsers {
      id
      name
      product
    }
  }

  query GetUserById($id: ID) {
    getUserById(id: $id) {
      id
      name
      product
    }
  }
`;
