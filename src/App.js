  import React,{useState} from 'react';
  import AddModal from './Addmovie';
  import './App.css';
  import noura from './noura.jpg';
  import Movie from "./movieList"

  function App() {
    const [movie, setMovie] = useState([{title:'noura', year:2019, rating:3,img:nour,description:''},

    {title:'starwors', year:2019, rating:5, img:'./Star Wars.jpg',description:''},


    {title:'made in italie', year:2020, rating:3, img:'WmFwZndlY21ZVGJ2Y21MdFJjbWJ2Tmp3VGptdnZjdmM.jpg', description:''},
    

    ])

    return (
      <div>
        <AddModal/>
        <Movie movie={movie}/>

      </div>
      
    )
  }

  export default App;
