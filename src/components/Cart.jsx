import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

const Cart = () => {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddItem = (product) => {
    dispatch(addToCart(product));
  };
  const handleRemoveItem = (product) => {
    dispatch(removeFromCart(product));
  };

  const cartValue = product.reduce((acc, cur) => acc + cur.price * cur.qty, 0);

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <h3 className="display-3 fw-bold text-center">Cart</h3>
          <hr />
          {product.length === 0 ? (
            <h1 className="display-1  text-center">No item in Cart</h1>
          ) : (
            <>
              {product.map((product) => {
                return (
                  <div className="d-flex" key={product.id}>
                    <div className="col-md-4 mt-5" key={product.id}>
                      <img
                        src={product.image}
                        alt=""
                        height="200px"
                        width="180px"
                      />
                    </div>
                    <div className="col-md-8">
                      <h3>{product.title}</h3>
                      <p className="lead fw-bold">
                        &#8377;{product.price} X {product.qty} = &#8377;
                        {(product.price * product.qty).toFixed(2)}
                      </p>
                      <button
                        className="btn btn-outline-dark me-2"
                        onClick={() => handleRemoveItem(product)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                      <button
                        className="btn btn-outline-dark me-2"
                        onClick={() => handleAddItem(product)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      {product.length > 0 && (
        <div className="container">
          <div className="row mt-4">
            <hr />
            <div className="d-flex justify-content-center justify-content-sm-end">
              <h1 className="m-3">
                Total : &#8377;
                <span className="fs-4">{cartValue.toFixed(2)}</span>
              </h1>
            </div>
            <div className="d-flex justify-content-center justify-content-sm-end">
              <button className="btn btn-primary col-sm-4 col-md-3 col-12 mt-1 m-3">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
