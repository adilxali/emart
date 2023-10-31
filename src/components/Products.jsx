import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/action/index";
import { addToCart } from "../features/cartSlice";
import Swal from "sweetalert2";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(products);
  const [selectedOption, setSelectedOption] = useState("All Products");

  const options = [
    "All Products",
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics",
  ];

  let componentMounted = true;

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
    Swal.fire({
      text: "Item Added to Cart",
      icon: "success",
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (componentMounted) {
        setProducts(data);
        setFilter(data);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProducts = (cat) => {
    if (cat === "all products") {
      setSelectedOption("All Products");
      setFilter(products);
    } else {
      const newProducts = products.filter(
        (product) => product.category === cat
      );
      setFilter(newProducts);
      setSelectedOption(cat);
    }
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="col-12 col-sm-10 d-flex flex-wrap gap-2 justify-content-center mb-5 pb-5">
          {options.map((option) => {
            return (
              <button
                className={`btn  ${
                  option === selectedOption ? "btn-dark" : "btn-outline-dark"
                }`}
                key={option}
                onClick={() => filterProducts(option.toLowerCase())}
              >
                {option}
              </button>
            );
          })}
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-2" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.Filter}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title ">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">
                    &#8377;{product.price}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark  me-4"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark"
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
