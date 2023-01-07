import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      name
      surname
    }
  }
`;

// export const CREATE_USER = gql`
//   mutation createUser(
//     $name: String!
//     $surname: String!
//   ) {
//     createUser {
//       name: $name
//       surname: $surname
//     }
//   }
// `;