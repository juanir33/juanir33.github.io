

// carrito de compras 

let cart= Array();

function additem(){
  cart.push(prompt('Agregue item'));

  if (cart.includes(null) == false) {
  additem();}
} 

function showcart(){
  
  alert(cart.join('\n'))
}

function finditem(){
  let find = cart.indexOf(prompt('Producto a buscar'));
  if (find !== -1){
    alert('El producto esta en su carrito')
  } else {
    alert('El producto no se ha encontrado')
  }

  
}

function deleteitem(){
  let n = cart.indexOf(prompt('Producto que desea eliminar'))
  let cut = cart.splice(n,1);
  return console.log(cut);
}



  
