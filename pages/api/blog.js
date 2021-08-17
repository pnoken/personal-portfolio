// import { MongoClient } from "mongodb";

// // /api/blog

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;
//     const { title, image, category, content } = data;

//     const client = await MongoClient.connect(
//       proccess.env.MongoClientURL,
//     );
//     const db = client.db();

//     const blogCollection = db.collection("blog");
//     const result = await blogCollection.insertOne(data);

//     console.log(result);

//     client.close();

//     res.status(201).json({ message: "Post Created" });
//   }
// }

// export default handler;
