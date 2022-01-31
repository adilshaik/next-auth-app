import React from 'react';

export const TodoItem = ({ todo }) => {
  return (
    <div className='w-full rounded-md shadow-sm border border-gray-200 py-2 my-5 capitalize px-5'>
      {todo.name}
    </div>
  );
};
