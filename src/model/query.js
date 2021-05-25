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
const SUBMIT_QUIZ = gql`
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
const MAKE_TRANSACTION = gql`
  mutation makeTransaction(
    $transaction: TransactionInput!
    $saveMode: SaveReciever
  ) {
    makeTransaction(input: $transaction, save: $saveMode) {
      from
      date
      category {
        name
        subCategories {
          name
          contacts {
            realName
          }
        }
      }
    }
  }
`;
const QUERY_QUIZ = gql`
  query GetRates {
    user {
      id
      quizs {
        cash: monthlyBudget(input: CASH)
        vib: monthlyBudget(input: VIB)
        out: monthlyBudget(input: OTHER_BANK)
        ewallet: monthlyBudget(input: E_WALLET)
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
  }
`;
const QUERY_MONTHLY_EXPENSE = gql`
  {
    user {
      quizs {
        monthlyExpense {
          category {
            name
            iconName
          }
          maxAmount
          currentAmount
        }
      }
    }
  }
`;
const QUERY_SPENDING_TRACKER = gql`
  {
    user {
      transactions {
        category {
          name
          iconName
        }
        amount
        date
        message
        note
      }
      quizs {
        cash: monthlyBudget(input: CASH)
        vib: monthlyBudget(input: VIB)
        out: monthlyBudget(input: OTHER_BANK)
        ewallet: monthlyBudget(input: E_WALLET)
        monthlyTotalBudget
      }
    }
  }
`;
const QUERY_CONTACTS = gql`
  {
    user {
      categories {
        name
        iconName
        subCategories {
          name
          iconName
          contacts {
            realName
            nickname
            accountNumber
            bank
          }
        }
      }
    }
  }
`;
const QUERY_LIMIT_EXPENSE = gql`
  {
    user {
      transactions {
        date
        amount
        message
        category {
          name
          iconName
          subCategories {
            name
            iconName
          }
        }
      }
      quizs {
        limitExpense {
          category {
            name
            iconName
          }
          maxAmount
          currentAmount
        }
      }
    }
  }
`;
export {
  QUERY_MONTHLY_EXPENSE,
  SUBMIT_QUIZ,
  REGISTER_USER,
  QUERY_QUIZ,
  QUERY_SPENDING_TRACKER,
  QUERY_CONTACTS,
  MAKE_TRANSACTION,
  QUERY_LIMIT_EXPENSE,
};
