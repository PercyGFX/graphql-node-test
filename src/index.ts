import express from "express";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";
import { ApolloServer } from "apollo-server-express";

const app = express()

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
server.applyMiddleware({ app });


app.get('/',(req,res)=>{

    res.send("helloo")

})


const port = process.env.PORT || 5000; // Default to port 3000 if PORT environment variable is not set

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});