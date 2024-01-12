import React from 'react';

interface DeleteButtonProps {
  onDeleteClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDeleteClick }) => {
  return <button onClick={onDeleteClick}>Delete</button>;
};

export default DeleteButton;