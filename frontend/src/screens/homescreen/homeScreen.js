import React, {useEffect} from 'react';
import './homeScreen.css'
import {useSelector,useDispatch} from "react-redux";

//components
import Product from "../../components/product/product.js";

//Actions
import {getProducts as listProducts} from "../../redux/actions/productActions";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const {products, loading, error} = getProducts;

    useEffect(()=>{
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map((product) => (
                        <Product key={product._id}
                                 name={product.name}
                                 description={product.description}
                                 price={product.price}
                                 imageUrl={product.imageUrl}
                                 productId={product._id}/>
                    ))
                )}
            </div>
        </div>
    );
};

export default HomeScreen;