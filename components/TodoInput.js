import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const TodoInput = () => {
  const [todo, setTodo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/todo', { todo });
      toast.success(res.data.msg);
      setTodo('');
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <h2 className='block text-3xl font-bold text-gray-700'>Todo List</h2>
      <form onSubmit={handleSubmit} className='mt-5 flex'>
        <input
          type='text'
          name='todo'
          id='todo'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-11/12 sm:text-sm border-gray-300 rounded-md'
          placeholder='Enter Todo'
        />
        <button className='w-44 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 ml-2'>
          Create
        </button>
      </form>
    </div>
  );
};
