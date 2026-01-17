const elResultat = document.getElementById('resultat');
const elEgal = document.getElementById('egal');
const elVirgule = document.getElementById('virgule');
const elChiffres = document.querySelectorAll('.chiffre, .operateur');
const elAc = document.getElementById('ac');


let ajoutAffiche = function(expression){
    elResultat.textContent += expression;
};

let calculerResultat = function(){
    return eval(elResultat.textContent);
}

elVirgule.addEventListener('click', () => {
    ajoutAffiche(elVirgule.value);
});

elEgal.addEventListener('click', () => {
    elResultat.textContent = calculerResultat();
});

elChiffres.forEach(element => {
    element.addEventListener('click', function(){
        ajoutAffiche(this.value);
    })
});

elAc.addEventListener('click', () =>{
    elResultat.textContent = "";
})
