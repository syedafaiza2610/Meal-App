// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <!-- Your head content here -->
// </head>
// <body>

//   <div class="card" style="width: 18rem;">
//     <img src="..." id='thumbnail' class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 id="title" class="card-title">Card title</h5>
//       <p id="recipe" class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>

//   <script>
//     // Your JavaScript code here
//     const url = 'http://www.themealdb.com/api/json/v1/1/random.php';
//     const thumbnailEl = document.getElementById('thumbnail');
//     const titleEl = document.getElementById('title');
//     const recipeEl = document.getElementById('recipe');
//     const res = fetch(url)
//       .then((data) => data.json())
//       .then((data1) => {
//         console.log(data1.meals[0]);
//         const result = data1.meals[0];
//         console.log(result.strMeal);
//         const title = result.strMeal;
//         const category = result.strCategory;
//         const recipe = result.strInstructions;
//         const thumbnail = result.strMealThumb;
//         titleEl.textContent = title;
//         recipeEl.textContent = recipe.slice(0, 200) + '....';
//         thumbnailEl.src = thumbnail;
//       });
//   </script>

// </body>
// </html>
