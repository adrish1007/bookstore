import React from "react";

const SortFilter = ({ setSortOption, setFilterOption }) => {
  return (
    <div className="sort-filter">
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name">Name</option>
      </select>
      <select onChange={(e) => setFilterOption(e.target.value)}>
        <option value="">Filter By</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  );
};

export default SortFilter;
