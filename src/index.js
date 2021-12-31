import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String
      age: Int
      average: Float
      married: Boolean!
      arrayString: [String]
    }
  `,
  resolvers: {
    Query: {
      id: () => '1sadia189-654asdf-f',
      name: () => 'Erickson Dutra',
      age: () => 31,
      average: () => 31.22,
      married: () => true,
      arrayString: () => ['G', 'R', 'A', 'P', 'H', 'Q', 'L'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
