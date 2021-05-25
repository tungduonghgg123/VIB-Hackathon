import {ApolloClient, InMemoryCache} from '@apollo/client';
import {createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {getData} from '../helper/asyncStorage';
import {onError} from '@apollo/client/link/error';

const httpLink = createHttpLink({
  // uri: 'http://172.20.10.6:4000/graphql',
  uri: 'http://localhost:4000/graphql',
});
// Log any GraphQL errors or network error that occurred
const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});
const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const userid = await getData('userid');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      userid,
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});
export default client;
