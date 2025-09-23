import moviesArr from '../data/movies.json'


function MovieList() {
    return (
        <section id="movie-list">
            <h3>List of movies:</h3>

            {moviesArr.map((movieObj, i, arr) => {
                return (
                    <div key={movieObj.id} className='box'>
                        <p>{movieObj.title}</p>
                        <p>{movieObj.year}</p>
                        <p>{movieObj.rating}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default MovieList