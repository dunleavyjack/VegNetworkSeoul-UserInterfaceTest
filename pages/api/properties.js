// this code is never exposed on the front end (like express.js handler functions)
// import { connectToDatabase } from "../../util/mongodb";

// export default async function handler(req, res) {
//   const { db } = await connectToDatabase();
//   const data = await db.collection("finds").find({}).limit(20).toArray();
//   res.json(data);
// }

// export default async function postFunction(req, res) {

// }

// if (req.method === 'POST') {
//   // Process a POST request
