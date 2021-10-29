import { MongoClient } from "mongodb";

async function mailhandler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { email } = data;

    const client = await MongoClient.connect(process.env.MongoClientURL);
    const db = client.db();

    const collection = db.collection("list");
    let foundEmail = await collection.findOne({ email: email });
    if (foundEmail) {
      return res.status(409).send({ duplicate: "Email already subscribed!" });
    }

    try {
      await collection.insertOne(data);
      res.status(201).json({ message: "Subscribed Successfully" });
    } catch (err) {
      res.status(400).send(err);
    }
    client.close();
  }
}

export default mailhandler;
