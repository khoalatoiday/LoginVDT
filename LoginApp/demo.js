const list = []

list.push(null, "123", 12)
console.log("123",list)

const o = {
    image: [...list].concat("test")
}

console.log(o.image[0])