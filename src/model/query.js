import {gql} from '@apollo/client';
const REGISTER_USER = gql`
  mutation {
    registerUser(
      input: {
        realName: "Nguyen Van A"
        accountNumber: "123456789"
        balance: 111111
      }
    ) {
      id
    }
  }
`;
const QUERY_USER = gql`
  query GetRates {
    user {
      id
      realName
    }
  }
`;
export {REGISTER_USER, QUERY_USER};
