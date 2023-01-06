const main = document.querySelector('.main');

const { URL } = require("url");

// ================================================================

fetch(genres_list_http + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
        data.genres.forEach( item =>
        {
            fetchMoviesListByGenres(item.id, item.name);
    })
    });
const fetchMoviesListByGenres = (id, genres) => {
    fatch(movie_genres_http + new URLSearchParams({
        api_key: api_key,
        with_genres: id,
        page: Math.floor(Math.random() * 3) + 1

    }))
        .then(res => res.json())
        .then(data => {
            makeCategoryElement(`${genres}_movies`, data.results);
        })
        .catch(err => console.log(err)); 
}
const makeCategoryElement = (category, data) => {
    main.innerHTML += `
    <div class="movie-list">

    <button class="pre-btn"><img src="img/left.png" alt=""></button>

    <h1 class="movie-category">${category}</h1>

    <div class="movie-container" id="${category}">
         
    </div>

    <button class="nxt-btn"><img src="img/next.png" alt=""></button>

</div> 
    `;
}



  