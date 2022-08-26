const nav = ["Home", "Catalog", "about", "Contact",];
const linkebi = ["index.html", "catalog.html", "about.html", "Contact.html"];
let navlength = nav.length;
let navtext = "<ul>";

for(let i=0; i<navlength; i++){
    navtext += '<li><a href="' + linkebi[i] +'">' + nav[i] + "</a></li>";
}

navtext += '</ul>';
console.log(navtext);
document.getElementById("nav").innerHTML = navtext;
