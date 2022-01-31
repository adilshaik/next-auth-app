import connectDB from '../../../utils/connectDb';
import Todo from '../../../models/Todo';
import { getSession } from 'next-auth/client';

connectDB();

const handler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      await createTodo(req, res);
      break;
    case 'GET':
      await getTodos(req, res);
      break;
  }
};

const createTodo = async (req, res) => {
  try {
    const session = await getSession({ req });
    if (!session) {
      return res.status(400).json({ msg: 'Invalid Authentication' });
    }

    const { userId } = session;
    const { todo } = req.body;

    if (!todo) {
      return res.status(200).json({ msg: 'Please add todo.' });
    }

    const newTodo = new Todo({
      name: todo.toLowerCase(),
      user: userId,
    });

    await newTodo.save();

    res.json({ msg: 'Success! Create a new todo.' });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getTodos = async (req, res) => {
  try {
    const session = await getSession({ req });
    if (!session) {
      return res.status(400).json({ msg: 'Invalid Authentication' });
    }

    const { userId } = session;

    const todos = Todo.find({ user: userId });

    res.json(todos);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default handler;
