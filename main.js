// const outputEl = document.querySelector("#output")
// outputEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
//     outputEl.innerHTML += `
//         <h3>${business.companyName}</h3>
//         <section>
//         <p>${business.addressFullStreet}</p>
//         <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
//         </section>
//     `
//     outputEl.innerHTML += "<hr/>"
// })

// const NYoutputEl = document.querySelector("#NYoutput")
// NYoutputEl.innerHTML = "<h1>New York Businesses</h1>"

// const newYorkBusinesses = businesses.filter(business => {
//     let company = `<h3>${business.companyName}</h3>
//                     <p>${business.addressFullStreet}</p>
//                     <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
//                     <hr />
//     `  

//     if (business.addressStateCode === "NY") {
//         NYoutputEl.innerHTML += company
//     }
// })

// const manufacturerOutputEl = document.querySelector("#manufacturerOutputEl")
// manufacturerOutputEl.innerHTML = "<h1>Manufacturing Industry</h1>"
// const manufacturingBusinesses = businesses.filter(business => {
//     let manufacturer = `<h3>${business.companyName}</h3>
//                         <p>${business.addressFullStreet}</p>
//                         <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
//                         <hr />
// `  

//     if (business.companyIndustry === "Manufacturing") {
//         manufacturerOutputEl.innerHTML += manufacturer
//     }
// })

// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {
    const overNine = business.orders.some(x => x > 9000)
    return overNine
})

console.log(bigSpenders)


