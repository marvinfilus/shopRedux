const addToCart = ( item ) => {
  console.log("adding item", item);
  return{
    type:'add',
    item
  }
}

const delFromCart = ( item , idx )=> {
  return{
    type: 'delete',
    item,
    idx
  }
}

export { addToCart, delFromCart}
