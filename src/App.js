
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Recipe from './components/Recipe';
import Loading from './components/Loading';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");
  const [isLoading, setIsLoading] = useState(true);

  const APP_ID = "8f4328f9";
  const APP_KEY = "ac8f17a0f9864744e7ff83a0cba91ed6";
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  useEffect(() => {
    getRecipe();

  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    //console.log(data);
    setRecipes(data.hits);
    setIsLoading(false);
  }
  console.log(recipes);


  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 col-md-6">
            <div className="input-group mb-3">
              <input type="text" className="form-control"
                placeholder="Recipe's Name"
                aria-describedby="button-addon2"
                value={search}
                name="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-secondary search-btn"
                type="button" id="button-addon2" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
        <div className="row ">
          {(isLoading) ? (
            <>
              <Loading />
              <Loading />
              <Loading />
            </>

          ) : (

              recipes.map((recipe) => (
                <Recipe title={recipe.recipe.label}
                  image={recipe.recipe.image}
                  calories={recipe.recipe.calories}
                  ingredients={recipe.recipe.ingredients} />
              )
              )

            )}




        </div>
      </div>

    </div>
  );
}

export default App;
