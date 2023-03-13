// Maak een nieuwe knop voor kleur groen
var button1 = document.createElement("button");
button1.innerHTML = "Groen";
button1.addEventListener("click", function() {
  document.body.style.backgroundColor = "green";
});

// Maak een nieuwe knop voor kleur rood
var button2 = document.createElement("button");
button2.innerHTML = "Rood";
button2.addEventListener("click", function() {
  document.body.style.backgroundColor = "red";
});

// Maak een nieuwe knop voor kleur blauw
var button3 = document.createElement("button");
button3.innerHTML = "Blauw";
button3.addEventListener("click", function() {
  document.body.style.backgroundColor = "blue";
});

// Voeg de knoppen toe aan de body van de pagina

const div = document.querySelector('#container');

div.appendChild(button1);
div.appendChild(button2);
div.appendChild(button3);

// Styling van alles 

div.style.backgroundColor = 'white';
div.style.padding = '50px';
div.style.width = '450px';
div.style.margin = '0px auto';
document.body.style.backgroundColor = "grey";
button1.style.backgroundColor = 'green';
button1.style.padding = '20px 40px';
button1.style.margin = '0px 10px';
button2.style.backgroundColor = 'red';
button2.style.padding = '20px 40px';
button2.style.margin = '0px 10px';
button3.style.backgroundColor = 'blue';
button3.style.padding = '20px 40px';
button3.style.margin = '0px 10px';



