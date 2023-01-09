import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      name
      surname
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $surname: String!
  ){
    createUser(
      user: {
        name: $name
        surname: $surname
      }
    ){
      ok
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!){
    deleteUser(userId: $userId){
      ok
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $userId: ID!
    $name: String!
  ){
    updateUser(
      userId: $userId
      user: {
        name: $name
      }
    ){
      ok
    }
  }
`;
