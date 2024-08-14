import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  onFilter: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onFilter }) => {
  return (
    <div className="mb-6">
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="filter-select p-2 rounded-md bg-purple"
      >
        <option value="">Todas as categorias</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
