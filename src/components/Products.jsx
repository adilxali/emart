import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/index";
import Swal from "sweetalert2";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(products);
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
  const Loading = () => {
    return (<>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    <div className="col-md-3">
      <Skeleton height={350}/>
    </div>
    </>);
  };
  const filterProducts = (cat) => {
    const newProducts = products.filter((product) => product.category === cat);
    setFilter(newProducts);
    console.log(newProducts)
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-1" onClick={()=>{
            setFilter(products);
          }}>All Products</button>
          <button className="btn btn-outline-dark me-1"
          onClick={()=>{
            filterProducts("men's clothing");
          }
          }
          >Men's Cloths</button>
          <button className="btn btn-outline-dark me-1"
           onClick={()=>{
            filterProducts("women's clothing");
          }
          }
          >Women's Cloths</button>
          <button className="btn btn-outline-dark me-1"
          onClick={()=>{
            filterProducts("jewelery");
          }
          }
          >Jewellary's</button>
          <button className="btn btn-outline-dark me-1"
          onClick={()=>{
            filterProducts("electronics");
          }
          }
          >Electronics </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-2" >
                <div className="card h-100 text-center p-4" key={product.title} >
                  <img src={product.image} className="card-img-top" alt={product.Filter} height='250px' />
                  <div className="card-body">
                    <h5 className="card-title ">{product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">
                    &#8377;{product.price}
                    </p>
                    <Link to={`/products/${product.id}`} className="btn btn-outline-dark  me-4">
                      Buy Now
                    </Link>
                    <button className="btn btn-dark" onClick={()=>addProduct(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
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
