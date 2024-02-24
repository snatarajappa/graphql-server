import { readFileSync } from "fs";
import path from "path";

const userTypes = readFileSync(
  path.join(__dirname, "./typeDefs/user.graphql"),
  { encoding: "utf-8" }
);

export const typeDefs = `
${userTypes}
`;

export const resolvers = {
  Query: {
    users() {
      return [{ id: "1", email: "testuser@graphql.com", username: "User1" }];
    },
    user() {},
  },
  Mutation: {},
};
