import moviesArr from '../data/movies.json'


function MovieList() {

    let message = '';
    if (moviesArr.length > 0) {
        message = <h3>List of movies:</h3>
    } else {
        message = <h3>Sorry, no movies to display</h3>
    }


    return (
        <section id="movie-list">

            {message}

            {moviesArr.map((movieObj, i, arr) => {
                return (
                    <div key={movieObj.id} className='box'>
                        <p>{movieObj.title}</p>
                        <p>{movieObj.year}</p>
                        <p>{movieObj.rating}</p>

                        {movieObj.imgURL
                            ? <img src={movieObj.imgURL} alt="Movie poster" />
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" alt="" />
                        }

                        {movieObj.rating > 7 && <p>RECOMMENDED</p>}
                    </div>
                )
            })}
        </section>
    )
}

export default MovieList