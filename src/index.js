import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'asdf34',
          userName: 'ericksondutra',
        };
      },
      users: () => {
        return [
          {
            id: '1',
            userName: 'erick1',
          },
          {
            id: '2',
            userName: 'erick2',
          },
          {
            id: '3',
            userName: 'erick3',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
