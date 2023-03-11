import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB, insertDocument } from '@/src/helpers/mongodb';
import { ObjectId } from 'bson';

interface IMessage {
  id?: ObjectId;
  email: string;
  name: string;
  message: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name.trim() || !message.trim()) {
      res.status(422).json({ message: 'Invalid input' });
    }

    const newMessage: IMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await connectMongoDB();
    } catch (error) {
      res.status(500).json({ statusMessage: 'Could not connect to database.' });
      return;
    }

    try {
      const result = await insertDocument(client, 'contacts', newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ statusMessage: 'Message storing failed!' });
      return;
    }

    client.close();

    res.status(201).json({
      statusMessage: 'Successfully stored message!',
      message: newMessage,
    });
  }
}

export default handler;
