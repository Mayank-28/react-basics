import axios from "axios";
import './product-card.css'

const { Fragment, useEffect, useState } = require("react")

const ProductCard = () =>{

    const [productData , setProductData] = useState();

    useEffect(()=>{
        axios({
            method:'get',
            url:'https://fakestoreapi.com/products'
        }).then(function(res){
            setProductData(res.data);
        })
    },[]);
    
return(
    <Fragment>
        <p>Product Card Data</p>
        <div className="flex-container">
            {
            productData !== undefined ?
            productData.map(data =>{
                return (
                    <div className="card" key = {data.id}>
                        <img className="imageCard" alt= {data.title} src={data.image}/>
                    <h3 className="cardTitle">{data.title}</h3>
                    
                    </div>
                )
            }) 
            :
            <p>Loading the data ... Please wait.</p>
            
            }
        </div>
    </Fragment>
)
}

export default ProductCard;