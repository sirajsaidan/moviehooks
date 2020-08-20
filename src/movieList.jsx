        import React from "react"
        import './App.css';
import CardMovie from "./CardMovie";

        const Movie =props=>{
            
            return(
                <div >
                    
                    <div className="row">
                        {props.movie.map((e , i)=> <CardMovie key={i} cardMovie={e}/>
                           )}
                    </div>
               
                </div>
            )

        }
        export default Movie