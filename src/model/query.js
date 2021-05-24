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
const SUMMIT_QUIZ = gql`
  mutation summitQuiz($input: QuizInput) {
    submitQuiz(input: $input) {
      cash: monthlyBudget(input: CASH)
      vib: monthlyBudget(input: VIB)
      out: monthlyBudget(input: OTHER_BANK)
      ewallet: monthlyBudget(input: E_WALLET)
      date
      monthlyTotalBudget
      monthlyExpense {
        category {
          name
        }
        maxAmount
        currentAmount
      }
      limitExpense {
        category {
          name
        }
        maxAmount
        currentAmount
      }
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
export {SUMMIT_QUIZ, REGISTER_USER, QUERY_USER};
