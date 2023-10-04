import PropTypes from "prop-types";
import { memo } from "react";

const ProductsCard = ({
  name,
  price,
  quantity,
  category,
  description,
  order,
  id,
  editProduct,
  deleteProduct,
}) => {
  return (
    <tr>
      <td>{order}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td className="d-flex justify-content-end align-items-center gap-3">
        <button onClick={() => editProduct(id)} className="btn btn-primary">
          Edit
        </button>
        <button onClick={() => deleteProduct(id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

ProductsCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  quantity: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  order: PropTypes.string,
  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

const MemoProductsCard = memo(ProductsCard);

export default MemoProductsCard;
