let lesTxt = document.getElementsByTagName("p");
console.log(lesTxt);

let textesTab = Array.from(lesTxt);

console.log(textesTab);

textesTab.map((paragraphe) =>{
        paragraphe.innerText = "HAHAHAHAHAHAHA JE SUIS LE JOKER";
        paragraphe.style = "color:red ; cursor:pointer";
        paragraphe.addEventListener('click', () =>{
            console.log("Hahahahahaha vous êtes le joker");
        })
    }
)
