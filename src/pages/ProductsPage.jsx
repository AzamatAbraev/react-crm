import { Container } from "react-bootstrap";
import { memo, useCallback, useState } from "react";
import { v4 } from "uuid";

import ProductsHeader from "../components/header/ProductsHeader";
import ProductsForm from "../components/form/ProductsForm";
import ProductsTable from "../components/ProductsTable";

import "./Pages.css";
import Header from "../components/common-header/Header";

const ProductsPage = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "Clothes",
    description: "",
  });
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("sort");

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      let newProduct = {
        ...product,
        price: +product.price,
        quantity: +product.quantity,
        id: v4(),
      };
      let newProducts;
      if (selected === null) {
        newProducts = [...products, newProduct];
      } else {
        newProducts = products.map((product) => {
          if (product.id === selected) {
            return newProduct;
          } else {
            return product;
          }
        });
      }
      setProducts(newProducts);
      resetProduct();
      setSelected(null);
      localStorage.setItem("products", JSON.stringify(newProducts));
    } else {
      setValidated(true);
    }
  }, [product, products, selected]);

  const handleProduct = useCallback((e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  }, [product]);

  const editProduct = useCallback((id) => {
    let product = products.find((product) => product.id === id);
    setSelected(id);
    setProduct(product);
  }, [products]);

  const resetProduct = (() => {
    setProduct({
      name: "",
      price: "",
      quantity: "",
      category: "Clothes",
      description: "",
    });
  });
  const deleteProduct = useCallback((id) => {
    let check = confirm("Are you sure that you want to delete the info ?");
    if (check) {
      let newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
      localStorage.setItem("products", JSON.stringify(newProducts));
    }
  }, [products]);

  const productFormProps = {
    selected,
    product,
    validated,
    handleProduct,
    handleSubmit,
    resetProduct,
  };

  const productsHeaderProps = {
    category,
    search,
    sort,
    setSort,
    setCategory,
    setSearch,
  };

  const productsTableProps = {
    category,
    search,
    sort,
    products,
    editProduct,
    deleteProduct,
  };

  return (
    <Container>
      <Header/>
      <div className="home-row row">
        <div className="col-lg-4 col-12">
          <ProductsForm {...productFormProps} />
        </div>
        <div className="col-lg-8 col-12">
          <ProductsHeader {...productsHeaderProps} />
          <ProductsTable {...productsTableProps} />
        </div>
      </div>
    </Container>
  );
};

const MemoProductsPage = memo(ProductsPage);

export default MemoProductsPage;
