import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
//import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [products , getProducts] = useState([]);
    //useSelector(state => state.products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
    //dispatch(getProducts());
  },[] );

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  };

  const cards = products.map(product => (
    <div className="col-md-3" style={{ marginBottom: "12px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "100px", width: "120px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Details</h1>
      <div className="row">{cards}</div>
    </>
  );
};
export default Product;
