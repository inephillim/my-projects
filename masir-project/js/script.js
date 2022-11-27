const dropdown=document.querySelector(".dropdownmenu")
const dropOptions=document.querySelector(".drop-options")
const toggle=document.querySelector(".toggle")
const icon=document.querySelector(".bx")
const countries=document.querySelector(".countries")
const search= document.querySelector(".search")
const countryName=document.getElementsByClassName("count")
const regions=document.getElementsByClassName("regions")




async function getCountries() {
    const URL= await fetch('https://restcountries.com/v2/all');
    const res = await URL.json();
    console.log(res);

    res.forEach(element => {
        showCountry(element);
        
    });
  
}
getCountries();


function showCountry(data){

    const country= document.createElement('div');

    country.classList.add("country");

    country.innerHTML=  
    `<div class="country-img">
    <img src="${data.flag}" alt="">
</div>
<div class="country-details">
    <h5 class="count">${data.name}</h5>
    <p><b>population</b></p>${data.population}
    <p class="regionName"><b>region</b>:${data.region}</p>
    <p><b>capital</b></p>${data.capital}
</div>`;


   countries.appendChild(country)

}




toggle.addEventListener("click",()=>{
icon.classList.toggle("bxs-moon")
document.body.classList.toggle("darkmode")
toggle.classList.toggle("darkmode")
})

dropdown.addEventListener("click",()=>{

    dropOptions.classList.toggle("show-options")
})

search.addEventListener("input",()=>{
Array.from(countryName).forEach(country=>{
    if(country.innerText.toLowerCase().includes(search.value.toLowerCase())){
        country.parentElement.parentElement.style.display="grid"
    }
    else{
        country.parentElement.parentElement.style.display="none"
    }
})
})

const regionName=document.getElementsByClassName("regionName")
Array.from(regions).forEach(region=>{
    region.addEventListener("click",e=>{
        
        Array.from(regionName).forEach(element=>{
            if(element.innerText.includes(region.innerText)||element.innerText=="all"){
                element.parentElement.parentElement.style.display= "grid"
            }
            else{
                element.parentElement.parentElement.style.display= "none"
                console.log("nah")
            }
        })
    })

})