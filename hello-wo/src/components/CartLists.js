const CartLists =()=>{
return(
   <div className={"cardContainer"}>
    <img className={"image"} src="/imagelogos/product.png" alt="product name" width="200px" height="200px"/>
  
   <div className={"prices"}>
    <span className={"newPrice"}>Rs.627</span>
        <small className={"oldPrice"}>
        <strike >Rs.200</strike>
        </small>
    </div>
    <div className="lowerCart">
    <h1 className="productName">Product Name</h1>
    <button className="addToCartBtn"><span>Add To Cart</span><img src="/imagelogos/R.png" alt="logo" width="10px" height="10px"/></button>
    </div></div>
 

)
}
export default CartLists;