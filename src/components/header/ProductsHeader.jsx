import {memo } from "react";
import { Form, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

import { categories } from "../../data/categories";

import "../../pages/Pages.css";

const ProductsHeader = ({ setSearch, search, category, setCategory, sort, setSort }) => {
  return (
    <div className="table-header">
      <InputGroup className="mb-3 mt-3">
        <Form.Control
          value={search}
          onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
          placeholder="Search..."
        />
        <InputGroup.Text>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </Form.Select>
        </InputGroup.Text>
        <InputGroup.Text>
          <Form.Select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="sort">Sort</option>
            <option value="ascending">1-10</option>
            <option value="descending">10-1</option>
          </Form.Select>
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

ProductsHeader.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  category: PropTypes.string,
  setCategory: PropTypes.func,
  sort: PropTypes.string,
  setSort: PropTypes.func,
};

const MemoProductsHeader = memo(ProductsHeader);

export default MemoProductsHeader;
