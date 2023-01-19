let home = document.querySelector(".home")

function parse1(elem) {
    let tbody = document.createElement("tbody")
    tbody.classList.add('tab')
    elem.map((item, key) => {
        let tr = document.createElement("tr")
        if (item.col5) tr.classList.add("end")
        if (key == 0) {
            tr.innerHTML = `<td> ${item.col1}</td><td>${item.col2}</td ><td>${item.col3}</td><td>Korish</td>`
        } else {
            tr.innerHTML = `<td td > ${key}</td ><td>${item.col2}</td><td><a href="${item.col3}"><img height="100px" src="${item.col3}"></a></td><td><a download href="${item.col3}" style="color:white;text-decoration:none;padding:6px 12px;background:#007bff;border-radius:5px">Download</a></td>`
        }
        tbody.appendChild(tr)
    })
    return tbody
}

tables.map(elem => {
    let table = document.createElement("table")
    // table.style.height = "px"
    table.appendChild(parse1(elem))
    home.appendChild(table)
})