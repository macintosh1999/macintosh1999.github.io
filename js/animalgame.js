window.onload = init;

function init() {
    const main = document.getElementById("agmain")
    const avis = document.getElementById("aganimal")
    const pickdiv = document.getElementById("agpickanimal")
    const namediv = document.getElementById("agnamebox")
    const turtlepick = document.getElementById("agturtle")
    const catpick = document.getElementById("agcat")
    const dogpick = document.getElementById("agdog")
    let pickresult = document.getElementById("agpickresult")
    const namebox = document.getElementById("agnameinput")
    const submitname = document.getElementById("agsubmitname")
    let pickedAnimal = null
    let pet = null
    const speciesVis = {
        "turtle": "🐢",
        "cat": "🐈",
        "dog": "🐕"
    }

    const speciesData = {
        turtle: {
            diet: ["algae", "fruits"],
            maxAge: 30
        },

        cat: {
            diet: ["meat", "catfood"],
            maxAge: 18
        },

        dog: {
            diet: ["meat","fruits","vegetables"],
            maxAge: 13
        },
    }

    const mainStats = {
        name: document.getElementById("aganimalname"),
        age: document.getElementById("agage"),
        hungerlvl: document.getElementById("aghunger"),
        diet: document.getElementById("agdiet"),
        species: document.getElementById("agspecies"),
    }

    class Animal {
        constructor(name, age, diet, hunger, alive, species) {
            this.name = name
            this.age = age
            this.diet = diet
            this.hungerlvl = hunger
            this.isalive = alive
            this.species = species
        }

        feed(amount, food) {
            return `Fed ${this.name} ${amount} grams of ${food}`
        }

        getInfo(){
            return {
                name: this.name,
                age: this.age,
                diet: this.diet,
                hungerlvl: this.hungerlvl,
                isalive: this.isalive,
                species: this.species
            }
        }
    }

    function afterClick() {
        turtlepick.disabled = true
        catpick.disabled = true
        dogpick.disabled = true

        namediv.hidden = false

        submitname.onclick = function () {
            if (namebox.value != "") {
                pet = new Animal(namebox.value,1,speciesData[pickedAnimal].diet,100,true,pickedAnimal);
                pickdiv.hidden = true
                avis.innerText = speciesVis[pickedAnimal]
                main.hidden = false

                mainStats.age.innerText = `age: ${pet.getInfo().age}`
                mainStats.name.innerText = pet.getInfo().name
                mainStats.hungerlvl.innerText = `hunger: ${pet.getInfo().hungerlvl}`
                mainStats.diet.innerText = `diet: ${pet.getInfo().diet}`
                mainStats.species.innerText = `species: ${pet.getInfo().species}`

            } else {
                document.getElementById("agnamefail").hidden = false
            }
        }
    }

    turtlepick.onclick = function () {
        pickresult.innerHTML = "you have chosen the turtle"
        pickedAnimal = "turtle"
        afterClick()
    }

    catpick.onclick = function () {
        pickresult.innerHTML = "you have chosen the cat"
        pickedAnimal = "cat"
        afterClick()
    }

    dogpick.onclick = function () {
        pickresult.innerHTML = "Yyou have chosen the dog"
        pickedAnimal = "dog"
        afterClick()
    }
}