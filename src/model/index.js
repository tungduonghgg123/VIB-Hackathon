import {ApolloClient, InMemoryCache} from '@apollo/client';
import {gql, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {getData} from '../helper/asyncStorage';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const userid = await getData('userid');
  console.log('userid', userid);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      userid,
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
client
  .query({
    query: gql`
      query GetRates {
        user {
          id
          realName
        }
      }
    `,
  })
  .then(result => console.log(result))
  .catch(e => console.log(e));
export default client;
