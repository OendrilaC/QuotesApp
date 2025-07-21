import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConnection.js";
import { graphqlHTTP } from "express-graphql";
import { root } from "../graphql/resolvers.js";
import { schema } from "../graphql/schema.js";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

connectDB();
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
