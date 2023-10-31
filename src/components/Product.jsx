import React , {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from "../features/cartSlice";
import Swal from 'sweetalert2';
const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addToCart(product));
        Swal.fire({
            text: 'Item Added to Cart',
            icon: 'success',    
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            
            
          })
    }

    useEffect(() => {
        setLoading(true);
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        }
        getProduct();
        
    }, []);
    const Loading = () => {
        return (
            <>
            <div className="col-md-6">
                <Skeleton height={400} width={400}/>
            </div>
            <div className="col-md-6" style={{lineHeight:2}}>
                <Skeleton height={50} width={300} />
                <Skeleton height={75}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50}/>
                <Skeleton height={150}/>
                <Skeleton height={50} width={100}/>
                <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                
            </div>
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className="display-5">
                    {product.title}
                </h1>
                <p className="lead">
                    Rating : { product.rating && product.rating.rate} <i className="fa fa-star"></i>
                </p>   
                <h3 className="display-6 fw-bold">
                    Price : &#8377;{product.price}
                    </h3> 
                <p className="lead">
                    {product.description}.
                </p>
                <button className="btn btn-outline-dark me-2"
                onClick={()=>addProduct(product)}
                >
                    Add to Cart
                </button>
                <Link to="/cart" className="btn btn-dark ms-2 px-3">
                    Go to Cart
                </Link>

            </div>

            </>
        )
    }
  return (
    <div className='container mt-5'>
        <div className="row py-4">
            {loading ? <Loading/> : <ShowProduct/> }
        </div>
    </div>
  )
}

export default Product