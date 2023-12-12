
  function typeWriterEffect(text, elementId) {
    let index = 0;
    const intervalId = setInterval(function() {
      document.getElementById(elementId).textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 100); 
  }

  const initialText = "Bringing class to cuisine.Foodies welcome here!";
  typeWriterEffect(initialText, "output");

  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  const thumbnailEl = document.getElementById("thumbnail");
  const titleEl = document.getElementById("title");
  const recipeEl = document.getElementById("recipe");
  const mycardEl = document.getElementById("mycard");
  const searchtxtEl = document.getElementById("searchtxt");
  const searchRecEl = document.getElementById("searchRec");
  

  function getFullRecipe(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then((data) => {
            if (!data.ok) {
                throw new Error(`Network response was not ok: ${data.status}`);
            }
            return data.json();
        })
        .then((data1) => {
            const result = data1.meals[0];
            const fullRecipe = result.strInstructions;

            // Display the full recipe in a modal or another section as needed
            alert(fullRecipe);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
  
const searchRecipe = () => {
  searchRecEl.textContent = "";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtxtEl.value}`)
      .then((data) => {
          if (!data.ok) {
              throw new Error(`Network response was not ok: ${data.status}`);
          }
          return data.json();
      })
      .then((data1) => {
          try {
              const len = data1.meals.length;

              searchRecEl.innerHTML += '<div class="container mt-4">';
            
              searchRecEl.innerHTML += '<div class="d-flex flex-wrap justify-content-center">';

              for (let i = 0; i < len; i++) {
                 
                  searchRecEl.innerHTML += `<div class="card mb-4 col-4 " style="col-4 align:center width:20%">
                      <img src="${data1.meals[i].strMealThumb}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${data1.meals[i].strMeal}</h5>
                          <p class="card-text">${data1.meals[i].strInstructions.slice(0, 200) + "...."}</p>
                          <button class="btn btn-primary" onclick="getFullRecipe('${data1.meals[i].idMeal}')">Get Full Recipe</button>
                      </div>
                  </div>`;
              }

              searchRecEl.innerHTML += '</div></div>';
          } catch (e) {
              console.log("Error:", e);
          }
      });
};








  
  


