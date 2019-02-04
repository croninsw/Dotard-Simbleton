const salesReps = businesses.map(business => {
    return {
        "fullName": business.purchasingAgent.nameFirst + " " + business.purchasingAgent.nameLast,
        "company": business.companyName,
        "phoneNumber": business.phoneWork
    }
})

const salesRepOutputEl = document.querySelector("#salesRep")
salesRepOutputEl.innerHTML = "<h1>Purchasing Agents</h1>"

salesReps.forEach(rep => {
    salesRepOutputEl.innerHTML += `<h2>${rep.fullName}</h2>
                                    <h4>${rep.company}</h4>
                                    <h4>${rep.phoneNumber}</h4>
                                    `
    salesRepOutputEl.innerHTML += `<hr />`
})
