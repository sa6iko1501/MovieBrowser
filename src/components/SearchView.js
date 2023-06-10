import Hero from './Hero'
import "../App.css";
import { Link } from 'react-router-dom';
//TMDB API key is : de0635b0ba3ccb56fb0a24f372188771

const MovieCard = ({movie}) => {

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    const detailUrl = `/movies/${movie.id}`

    return(
        <div className="col-lg-4 col-md-3 col-2 m-2.5 my-1">
            <div className="card bg-secondary bg-dark text-white w-100 h-100">
                <img className="card-img-top" src={posterUrl} alt={movie.title}/>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>  
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
    }



const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj,i)=>{
        return (<MovieCard movie={obj} key={i}></MovieCard>)
    })

    return(
        <div>
            <Hero text={title} />
            {resultsHtml && 
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchView;