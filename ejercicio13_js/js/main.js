function Product(name, description, cost, classification, profit, priceLast6Months, saleLastWeek, dateExpiry,sale, restDaysExpiry, avgPrice) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.classification = classification;
    this.profit = profit;
    this.priceLast6Months = priceLast6Months;
    this.saleLastWeek = saleLastWeek;
    this.dateExpiry = dateExpiry;
    this.sale = function(){
        return (this.cost*this.profit)+this.cost
    };
    this.restDaysExpiry = function(){
        let today = new Date();
        let expiryDate = new Date(this.dateExpiry);
        let millisecondsDay = 24*60*60*1000; //horaDia*minHora*segMin*Milisegundos
        let millisecondsElapsed = Math.abs(today.getTime()-expiryDate.getTime());
        let daysElapsed = Math.round(millisecondsElapsed/millisecondsDay)
        return daysElapsed
    }

    this.avgPrice = function(){
        let sum = priceLast6Months.reduce((accum,num)=>{return accum += num},0)
        let avg = sum/priceLast6Months.length
        return parseFloat(avg.toFixed(2))
    }
}

// instanciar
const productCollection=[];
    let leche = new Product('Gloria', 'leche', 2 , 'lacteo', 0.3,[25,42,32,21,28,36],9, '2021/06/10')
    let arroz = new Product('Costeño', 'arroz', 2.5 , 'cereal', 0.25,[40,23,28,31,21,16],55, '2021/05/25')
    let gelatina = new Product('Negrita', 'proteico', 3 , 'postre', 0.15,[38,20,32,41,27,18],8, '2021/04/12')
    let avena = new Product('Quaker', 'avena', 1.5 , 'cereal', 0.2,[18,43,25,30,28,33],52, '2021/06/10')
    productCollection.push(leche,arroz,gelatina,avena);
    console.log(productCollection)

//Mayor a 50 Unidades vendidas la última semana
const productsHigherSale = productCollection.filter(product1=>{
    let higher = product1.saleLastWeek > 50
    return higher
}) 
console.log(productsHigherSale)

//Menor a 10 Unidades vendidas la última semana
const productLessSale = productCollection.filter(product2=>{
    let less = product2.saleLastWeek < 10
    return less
}) 
console.log(productLessSale)

//Productos que se encuentren a menos de 15 días próximos a caducar
const productLessExpiry = productCollection.filter(product3=>{
    let lessExpiry = product3.restDaysExpiry() < 15
    return lessExpiry
})
console.log(productLessExpiry)