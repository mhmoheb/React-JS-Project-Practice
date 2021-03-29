import React from 'react';
import reactDom from 'react-dom';

const Categories = ({allCategories, filterItems}) => {
    return (
        <div className="btn-container">
          {allCategories.map((category, index) => {
            return (
              <button
                type="button"
                className="filter-btn"
                key={index}
                onClick={() => filterItems('category')}
              >
                {category}
              </button>
            );
          })}
        </div>
      );
}
 
export default Categories;





