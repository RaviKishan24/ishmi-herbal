// import React, { useEffect, useState } from 'react'
// import "./RandomColor.css"

// function RandomColor() {

//     const [colors, setColors] = useState([])
//     console.log("colors is:"), colors

//     const randomcolors = () => {
//         let hexDigits = '0123456789ABCDEF'
//         let color = "#"
//         for (let j = 0; j < 6; j++) {
//             color += hexDigits[Math.floor(Math.random() * 16)]
//         }

//         return color;
//     }

//     useEffect(() => {
//         const multipleRandomColors = () => {
//             const newcolor = []
//             for (let i = 0; i <= 16; i++) {
//                 newcolor.push(randomcolors())
//             }
//             return setColors(newcolor)
//         }
//         multipleRandomColors();
//         console.log("colors is :", colors)
//     }, [])






//     const handleclick = (id) => {

//         const clickUpdatedColor = randomcolors()
//         // console.log("updated color is:", clickUpdatedColor, id)
//         const newcolor = [...colors]
//         newcolor[id] = clickUpdatedColor

//         setColors(newcolor)


//     }

//     // const nameArray=['Ravi',"Ron","jon","Don"]
//     // console.log("name array is:",nameArray)
//     // const newnameArray=[...nameArray]
//     // newnameArray[3]='ritik'
//     // console.log("new  Name array is",newnameArray)


//     return (
//         <div>
//             <h1>Random Color genereator</h1>
//             <div className='randomColorContainer'>
//                 {
//                     colors.map((colors, index) => {
//                         // { console.log("background color is:",colors) }
//                         return <div key={index} className={index} onClick={() => handleclick(index)} style={{ backgroundColor: colors, width: '100px', height: "100px", cursor: "pointer" }}></div>

//                     })

//                 }
//             </div>





//         </div>

//     )
// }

// export default RandomColor;
