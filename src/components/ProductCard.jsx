function ProductCard({items})
{ 
    return(
        <div>
            <img src={items.img} alt="" />
            name : {items.name}
            price : {items.price}
        </div>
    )
}

export default ProductCard;