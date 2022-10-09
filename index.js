const input = document.querySelector("form")
const searchresult = document.querySelector(".search-result")
let foodOrder = document.getElementById("Order-food")
let image = document.getElementById("image")
let searchinput =""
let newimage =""
let newfood =""

//get image
  newimage += `
  <img  src="page/logo-800x215.png">
  `
  //get main page id
  image.innerHTML =newimage
 newfood += `
            <div class="Order">
            <h1>Find Food Recipe Now</h1>
            <p>your recipe your way</p>
            </div>
 
 `
  foodOrder.innerHTML =newfood;

//Api key and id 
let ellams ={
    API_KEY :"f4077b9a0dfdbdcd36c0139891c0080a",
     API_ID :"6c3129b8"
}

let {API_KEY,API_ID }= ellams

//input event listener
input.addEventListener("submit",(e)=>{
   e.preventDefault()
    searchinput = e.target.querySelector("input").value
    fetchAPI()
    console.log(fetchAPI())
})

//api function with api url
async function fetchAPI(){
    const foodapi = `https://api.edamam.com/search?q=${searchinput}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=9`;
    const response = await fetch(foodapi)
    const data = await response.json()
    htmlRender(data.hits)
}

//render new html function >> check input for function
 function htmlRender(outputs){
       let newhtml =""
        outputs.map((output)=>{
           newhtml +=`
           
           <div class="item">
                <img id="api-image" src="${output.recipe.image}" alt="">
                <div class="flex-container">
                  <h1 class="title">${output.recipe.label}</h1>
                  <a class="view-btn" href="#"></a>
                </div>
                <h2 >Calories: ${output.recipe.calories} </h2>
                <p class="item-data">${output.recipe.ingredientLines} </p>
              </div>
           
           `

        })
        searchresult.innerHTML = newhtml;
 }




