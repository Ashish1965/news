// src/components/CategoryFilter.js
import React from 'react';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filter">
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category} >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
