import React from 'react';

interface AddButtonProps {
  onAddClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onAddClick }) => {
  return <button onClick={onAddClick}>Add</button>;
};

export default AddButton;
