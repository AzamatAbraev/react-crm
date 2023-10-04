import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import ProductsCard from "./card/ProductsCard";
import { memo } from "react";

import "../pages/Pages.css";

const ProductsTable = ({
  products,
  editProduct,
  deleteProduct,
  search,
  category,
  sort,
}) => {
  let results = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );
  if (category !== "all") {
    results = results.filter((result) => {
      return result.category === category;
    });
  }
  if (sort !== "sort") {
    if (sort === "ascending") {
      results.sort((a, b) => (+a.price > +b.price ? 1 : -1));
    } else if (sort === "descending") {
      results.sort((a, b) => (+a.price > +b.price ? -1 : 1));
    }
  }
  return (
    <div className="table-wrapper">
      <Table className="products-table" striped bordered hover>
        <thead>
          <tr>
            <th>No </th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.length !== 0 ? (
            results.map((product, i) => (
              <ProductsCard
                editProduct={editProduct}
                deleteProduct={deleteProduct}
                key={product.id}
                order={i + 1}
                {...product}
              />
            ))
          ) : (
            <tr>
              <td className="text-center" colSpan={7}>
                No Products
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array,
  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
  search: PropTypes.string,
  category: PropTypes.string,
  sort: PropTypes.string,
};

const MemoProductsTable = memo(ProductsTable);

export default MemoProductsTable;
