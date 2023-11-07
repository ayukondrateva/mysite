const node_for_click = document.getElementById("for_click")

function find_edit(){
const place = document.getElementsByTagName('span')[0]
console.log(place.innerText)
place.innerText = 'GU MVD po gorodu Saint-Petersburg and LO'

const secondname = document.getElementsByTagName('span')[1]
console.log(secondname.innerText)
secondname.innerText = 'Kondrateva'

const name = document.getElementsByTagName('span')[2]
console.log(name.innerText)
name.innerText = 'Anastasia'

const dadchestvo = document.getElementsByTagName('span')[3]
console.log(dadchestvo.innerText)
dadchestvo.innerText = 'Yurevna'

const year = document.getElementsByTagName('span')[4]
console.log(year.innerText)
year.innerText = '2023'

}
node_for_click.addEventListener("click",find_edit)
