import connectDB from '../../../utils/connectDb';
import Todo from '../../../models/Todo';
import { getSession } from 'next-auth/client';

connectDB();

export default handler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      await createTodo(req, res);
      break;
  }
};

const createTodo = async (req, res) => {
  try {
    const session = await getSession({ req });
    console.log(session);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
