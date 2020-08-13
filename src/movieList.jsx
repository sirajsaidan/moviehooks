        import React from "react"
        import './App.css';
import CardMovie from "./movieCard";

        const Movie =props=>{
            
            return(
                <div>
                    <h1 className="titre">MOVIE DREAM</h1>
                    
                        {props.movie.map(e=> <CardMovie CardMovie={e}/>
                           )}
                    
               
                </div>
            )

        }
        export default Movie