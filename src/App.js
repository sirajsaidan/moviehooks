  import React,{useState} from 'react';
  import AddModal from './Addmovie';
  import './App.css';
  import Movie from "./movieList"
  import SearchMovie from "./search"

  function App() {
    const [movie, setMovie] = useState([{title:'noura', year:'9 septembre 2019',Réalisateur :' Hinde Boujemaa',Scénario : 'Hinde Boujemaa, Laurent Brandenbourger', rating:3,img:'/noura.jpg',
    description:'Noura rêve est un film dramatique franco-belgo-tunisien réalisé par Hinde Boujemaa et sorti en 2019.'},

    {title:'starwors', year:'16 décembre 2019',Réalisateur :' J. J. Abrams', Scénario : 'J. J. Abrams, George Lucas, Colin Trevorrow, Chris Terrio, Derek Connolly', rating:5, img:'/3326733.jpg',description:'il est ainsi le 32e plus gros succès du box-office mondial'},


    {title:'made in italie', year:'23 juillet 2020 ',Réalisateur:'James D Arcy',Scénario:'James D Arcy', rating:3, img:'/madeinitalie.jpg',description:'Made in Italy is a 2020 comedy-drama '},
    {title:'Elite', year: '5 octobre 2018',Réalisateur:'Georgina Amorós, Itzan Escamilla, Miguel Bernardeau',Scénario :' Carlos Montero, Darío Madrona', rating:5, img:'/elite.jpg',description:'Quand trois adolescents de la classe moyenne se retrouvent admis dans une prestigieuse école privée d Espagne, les tensions entre eux et les élèves dégénèrent rapidement et se finissent en un meurtre.'},
    {title:'Les Animaux fantastiques', year: '8 novembre 2016',Réalisateur:'David Yates',Scénario : 'J. K. Rowling',rating:5, img:'/205295.jpg',description:' Norbert Dragonneau rentre à peine d un périple à travers le monde où il a répertorié un bestiaire extraordinaire de créatures fantastiques. Il pense faire une courte halte à New York, mais une série dévénements et de rencontres inattendues risquent de prolonger son séjour. Désormais, le monde de la magie est menacé.'},

    

    ])
    const[search , setsearch ] = useState({rating : 1 ,  text : ""})
    
    const [keyworld, setKeyworld] = useState('') // ne3m usestate bech nejm ne3ml enrigeteremnt mte3 il input fil parent //
    const [StarKeyworld,setStarKeyworld]=useState(1)
 
function newmovie (x){ 
  setMovie(movie.concat(x))
}



    return (
      <div className="App">
        <div className="App-header">
        <AddModal newmovie={(x)=>newmovie(x)}/>

          <SearchMovie  StarKeyworld={StarKeyworld} setKeyworld={setKeyworld}  setStarKeyworld={setStarKeyworld} /> { /* 3edit il setkeyworld bech ytbedl fiha il titel  wbe3d neb3atheha props lil serach*/}
          </div >
          <div className="body">
        <h1 className="titre">MoviesHooks</h1>
                
        <Movie  movie={movie.filter(el => el.title.toLowerCase().includes(keyworld.toLowerCase()) && el.rating>=StarKeyworld)}/>
      </div>
      </div>
    )
  }

  export default App;
