class Route {
    constructor(col1, col2, col3, col4, col5) {
        this.col1 = col1
        this.col2 = col2
        this.col3 = col3
        this.col5 = col5
    }
    #name = "test"
}

let toute = new Route()
console.log(toute.name);

let dataTab1 = [
    new Route("1-dars", "Kalit so`zlar", "Resurslar"),
    new Route("", "img, h1, p, b, hr", "./1-dars/1.jpg"),
    new Route("", "h1,h3,ol", "./1-dars/2.jpg"),
    new Route("", "video hr p", "./1-dars/3.jpg"),
    new Route("", "ul li type", "./1-dars/4.jpg"),
    new Route("", "form ...", "./1-dars/5.png"),
    new Route("", "form ...", "./1-dars/6.jpg"),
    new Route("", "form ...", "./1-dars/7.jpg"),
    new Route("", "Table tr td b", "./1-dars/8.png"),
    new Route("", "Table tr td b", "./1-dars/9.jpg"),
]

let dataTab2 = [
    new Route("2-dars", "Kalit so`zlar", "Resurslar"),
    new Route("", "image h1-h6 bacground-colo", "./2-dars/1.png"),
    new Route("", "image h1-h6 bacground-colo", "./2-dars/2.jpg"),
    new Route("", "bacground-color headers font-size color", "./2-dars/3.png"),
    new Route("", "h1 span class color bacground-color", "./2-dars/4.png"),
]

let dataTab3 = [
    new Route("3-dars", "Kalit so`zlar", "Resurslar"),
    new Route("", "width height padding margin bacground-color bacground-image url size repeat position", "./3-dars/1.jpg"),
    new Route("", "border solid dashe dotted padding margin", "./3-dars/2.jpg"),
    new Route("", "padding marjin img border dashed p h1 div", "./3-dars/3.png"),
]
let dataTab4 = [
    new Route("4-dars", "Kalit so`zlar", "Resurslar"),
    new Route("", "display flex width height bacground justify content align items", "./4-dars/1.jpg"),
    new Route("", "display flex width height bacground justify content align items", "./4-dars/2.jpg"),
]
let dataTab5 = [
    new Route("5-dars", "Kalit so`zlar", "Resurslar"),
    new Route("", "display flex width height bacground justify content align items", "./5-dars/1.png"),
    new Route("", "display flex width height bacground justify content align items", "./5-dars/2.webp"),
    new Route("", "display flex width height bacground justify content align items", "./5-dars/3.webp"),
]
let dataTab6 = [
    new Route("6-dars", "Kalit so`zlar", "Resurslar"),
    new Route("", "display flex width height bacground justify content align items border-radius i", "./6-dars/1.jpg"),
    new Route("", "display flex width height bacground justify content align items border-radius padding i", "./6-dars/2.jpg"),
    new Route("", "display flex width height bacground justify content align items border-radius padding i", "./6-dars/3.jpg"),
    new Route("", "display flex width height bacground justify content align items border linear-gradient border-radius padding i", "./6-dars/4.jpg"),
]
let dataTab7 = [
    new Route("7-dars", "Kalit so`zlar", "Resurslar"),
    new Route("", "display flex width height bacground justify content align items border div", "./7-dars/1.jpg"),
    new Route("", "display flex width height bacground justify content align items border div", "./7-dars/2.jpg"),
]

let dataTab8 = [
    new Route("8-dars", "Kalit so`zlar", "Resurslar"),
    new Route("", "h1 p display flex juctify background", "./8-dars/1.png"),
    new Route("", "nav card icon img df", "./8-dars/2.png"),
    new Route("", "table thead tbody tr td th bg", "./8-dars/3.webp"),
    new Route("", "table thead tbody tr td th bg df icon button img", "./8-dars/4.jpg"),
]
let dataTab9 = [
    new Route("n-dars", "Kalit so`zlar", "Resurslar"),
    new Route("", "Figmadan foidalanish 4-5 guruglar proyekti", "https://www.figma.com/file/U0lxDNYZkg8GyZHe0YrV40/4,5-Guruhlar?node-id=0%3A1&t=2OJegQFeBehFqhY0-1"),
    new Route("", "Kallani ishlatish kerak", "./n-dars/n1.jpg"),
]
let tables = [
    dataTab1,
    dataTab2,
    dataTab3,
    dataTab4,
    dataTab5,
    dataTab6,
    dataTab7,
    dataTab8,
    dataTab9,
]