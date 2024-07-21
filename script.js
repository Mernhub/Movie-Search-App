let SearchInput = document.querySelector('.container .search-input input');
let result = document.querySelector('.container .movie-result');

SearchInput.addEventListener('keyup', (e) => {
    if (SearchInput.value !== "" && e.key === 'Enter') {
        MovieDetails();
    }
});

function MovieDetails() {
    let movieName = SearchInput.value;
    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=4bfabafd`)
        .then((res) => res.json())
        .then((data) => {
            if (data.Response === "True") {
                console.log(data);
                console.log(data.Poster);
                console.log(data.Title);
                console.log(data.imdbRating);
                console.log(data.Year);
                console.log(data.Rated);
                console.log(data.Runtime);
                console.log(data.Genre);
                console.log(data.Plot);
                console.log(data.Actors);

                result.innerHTML = `
                    <div class="movie-img">
                        <img src="${data.Poster}" alt="Loading.....">
                    </div>
                    <h3 class="movie-title">${data.Title}</h3>
                    <div class="movie-rating">
                    <i class="fa-solid fa-star"></i>
                    <h2>${data.imdbRating}</h2>
                    </div>
                    <div class = "details">
                    <span>${data.Year}</span>
                    <span>|</span>
                    <span>${data.Rated}</span>
                    <span>|</span>
                    <span>${data.Runtime}</span>
                    </div>
                    <div class = "genre">
                    <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                    <div class="plot">
                    <h2>Plot</h2>
                    <span>${data.Plot}</span>
                    </div>
                    <div class="cast">
                    <h2>Cast</h2>
                    <span>${data.Actors}</span>
                    </div>
                    `;
                } else {
                result.innerHTML = `<h3 class="message">${data.Error}</h3>`;
            }
        })
        .catch((error) => {
            console.error('Error fetching movie details:', error);
            result.innerHTML = `<p>Error fetching movie details</p>`;
        });
    }
    MovieDetails()
    
    // <div class="movie-year">${data.Year} </div>
    // <div class="movie-rated">${data.Rated}</div>
    // <div class="movie-runtime">${data.Runtime}</div>
    // <div class="movie-genre">${data.Genre}</div>
    // <div class="movie-plot">${data.Plot}</div>
    // <div class="movie-actors">${data.Actors}</div>