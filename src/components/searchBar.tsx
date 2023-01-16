
import React from 'react'

const searchBar = () => {
  return (
    <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Search for products"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-outline-primary">
            
          </button>
        </div>
  )
}

export default searchBar