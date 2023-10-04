import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import { categories } from "../../data/categories";
import { memo } from "react";

import "../../pages/Pages.css";


const ProductsForm = ({
  validated,
  handleSubmit,
  product: { name, price, category, quantity, description },
  handleProduct,
  selected,
  resetProduct,
}) => {
  return (
    <Form
      className="products-form d-flex flex-column gap-3 mt-3 mb-3"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <h2>Product Info</h2>
      <Form.Group controlId="name">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          required
          onChange={handleProduct}
          value={name}
          type="text"
          placeholder="Product Name"
        />
        <Form.Control.Feedback type="invalid">
          Please try again !
        </Form.Control.Feedback>
      </Form.Group>
      <div className="row">
        <Form.Group className="col-6" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={handleProduct}
            required
            value={price}
            type="number"
          />
          <Form.Control.Feedback type="invalid">
            Please try again !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="col-6" controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            onChange={handleProduct}
            required
            value={quantity}
            type="number"
          />
          <Form.Control.Feedback type="invalid">
            Please try again !
          </Form.Control.Feedback>
        </Form.Group>
      </div>
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select value={category} onChange={handleProduct}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          onChange={handleProduct}
          value={description}
          as="textarea"
          required
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please try again !
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex align-items-center justify-content-between">
        <Button variant="danger" onClick={resetProduct}>
          Clear
        </Button>
        <Button  type="submit">{selected === null ? "Add" : "Save"} Product</Button>
      </div>
    </Form>
  );
};

ProductsForm.propTypes = {
  validated: PropTypes.bool,
  handleSubmit: PropTypes.func,
  product: PropTypes.object,
  handleProduct: PropTypes.func,
  resetProduct: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

const MemoProductsForm = memo(ProductsForm);
export default MemoProductsForm;
