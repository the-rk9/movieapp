import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function MovieDetails() {

  const [movieInfo,setMovieInfo] = useState([]);

  useEffect(()=>{
    async function getData() {
      const actualData = await fetch(
        `https://api.tvmaze.com/search/shows?q=all`
      ).then((response) => response.json());
      setMovieInfo(actualData);
    }
    getData();
  },[])

  const [myStyle,setMyStyle] = useState({
    color: ""
  })

  const val = ["rgba(251, 0, 145, 1)","rgba(251, 0, 92, 1)",
  "rgba(148, 0, 251, 1)",
  "rgba(106, 0, 251, 1)",
  "rgba(34, 189, 0, 1)",
  "rgba(23, 0, 251, 1)"]

  const [count,setCount] = useState(0);

   useEffect(()=>{
    const interval = setInterval(()=>{
      setMyStyle({color: val[count]})
      setCount(count => count===5?0:count + 1)
    },1000);
    return () => clearInterval(interval);
  },[count])


  const filterOut = (rowid) => {
  
    const movieDetails = movieInfo.filter((data)=>{
        return data.show.id===rowid
    })
     localStorage.setItem("MovieDetails",JSON.stringify(movieDetails))
  }

  return (
    <div>
    <table className="table">
  <thead>
    <tr style={myStyle}>
      <th scope="col">Id</th>
      <th scope="col">Logo</th>
      <th scope="col">Movie Name</th>
      <th scope="col">Score</th>
      <th scope="col">View Summary</th>
    </tr>
  </thead>
  <tbody>
  {movieInfo.map((info)=>{
    return(
      <tr key={info.show.id}>
      <td>{info.show.id}</td>
      <td><img src={info.show.image.medium}/></td>
      <td>{info.show.name}</td>
      <td>{info.score}</td>
      <td onClick={()=>{filterOut(info.show.id)}}><Link className="btn btn-outline-primary" to='/moviesummary'>Summary</Link></td> 
    </tr>
    )
  })
  }
  </tbody>
</table>
    </div>
  );
}

export default MovieDetails;
