// import React, { useEffect, useState } from 'react'

// import productData from "./product.js"



// function EaxmpleShowProduts() {

//     console.log("productData is:", ProductData)
//     const SkinHairHealthProduct = productData.filter((item => item.category === "SkinHairHealth"))
//     console.log("SkinHairHealthProduct", SkinHairHealthProduct);

//     const [product, setProduct] = useState({})

//     console.log("initial product is :", product)

//     function handleclick() {
//         setProduct(productData)
//     }



//     useEffect(() => {
//         console.log("product after click on show button", product)
//     }, [product])





//     return (
//         <div>

//             <h1>This is exampleShowProduct Page</h1>


//             <button onClick={() => handleclick()}>Show Product</button>

//             <div className='Product'>
//                 {product.length === 0 ? "EmptyPRoduct" : <>
//                 {
//                     SkinHairHealthProduct.map((item) => {
//                         <h1>{item.title}</h1>
//                     })}

//                 {console.log("product is", product)}
//                 <h1>{product.name} </h1>
//                 <p>{product.title}</p>
//             </>}

//             <h1>{product.length===0 ?"EmptyName": product.title }</h1>
//             </div>

//         </div>
//     )
// }

// export default EaxmpleShowProduts;
