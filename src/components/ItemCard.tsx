import React from 'react';

interface ItemCardProps {
  name: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ name }) => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-lg font-bold capitalize text-center text-gray-800">{name}</h2>
    </div>
  );
};

export default ItemCard;