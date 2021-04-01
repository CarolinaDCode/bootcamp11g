var productsList = [
    {
        name:"producto 1",
        price:12.45,
        category:"Miscellaneous",
    },
    {
        name:"producto 2",
        price:25.13,
        category:"Vegetables",
    },
    {
        name:"producto 3",
        price:45.00,
        category:"Cloths",
    },
    {
        name:"producto 4",
        price:12500.00,
        category:"Computers",
    },
    {
        name:"producto 5",
        price:15500.00,
        category:"Computers",
    },
    {
        name:"producto 6",
        price:8729.00,
        category:"Computers",
    },
    {
        name:"producto 7",
        price:150.00,
        category:"Cloths",
    },
    {
        name:"producto 8",
        price:100.00,
        category:"Miscellaneous",
    },
    {
        name:"producto 9",
        price:50.00,
        category:"Vegetables",
    },
    {
        name:"producto 10",
        price:200.00,
        category:"Cloths",
    },
]


/*
    1.- quiero conocer la cantidad de productos en el array
    2.- quiero conocer el costo total de todos los productos del array
    3.- quiero conocer la cantidad de productos de cada categoría
        (Vegetables, Cloths, Miscellaneous, Computers)
    4.- quiero un nuevo array para cada categoría
    5.- quiero un nuevo array de strings que tenga lo siguiente
        [
            "El { productName } tiene un costo de { price }"
        ]
*/

//1.-
// var quantProduct=()=>{
//     var quant = productsList.length
//     return quant
// }
// var total_quantity_product = quantProduct()

// console.log(total_quantity_product)

//2.-

var price_x_product=()=>{
    let sumTotal=0; 
    for(i=0;i<productsList.length; i++){
        let priceOk = productsList[i].price;
        sumTotal += priceOk;
    }
    return sumTotal
}

// price_x_product()

// 3.-

// var filterCategory =(category_user)=>{
    // var category_user = prompt("Elija una categoría de estas 4: Vegetables, Cloths, Miscellaneous o Computers")
//     var onlyCategory=[];
//     let cant = productsList.length;
//     for (var i = 0; i<cant; i++) {
//         var element = productsList[i].category;
//         productsList[i].category === category_user && onlyCategory.push(productsList[i])
//     }
//     return onlyCategory
// }

// var hola = filterCategory();
// console.log(hola)

//4.-

// var categoryVetables = filterCategory("Vegetables");
// console.log(categoryVetables)

// var categoryCloths = filterCategory("Cloths");
// console.log(categoryCloths)

// var categoryMiscellaneous = filterCategory("Miscellaneous");
// console.log(categoryMiscellaneous)

// var categoryComputers = filterCategory("Computers");
// console.log(categoryComputers)

//5.-

var arrayString = () =>{
    let string_array = [];
    for(i=0;i<productsList.length; i++){
        let newString = `El ${ productsList[i].name } tiene un costo de ${ productsList[i].price}`
        string_array.push(newString)
    }
    return string_array
}

var string_products=arrayString()

console.log(string_products)