import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Indice from './Indice'
import symbol from '../assets/eurosymbol.png'

const ListIndices = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.polygon.io/v2/aggs/grouped/locale/global/market/fx/2023-01-09?adjusted=true&apiKey=kckFl0q8UpJ7tfILfckxA2fMoK8jwW2x')
      .then(res => {
        const responseData = res.data;
        setData(responseData.results);
        console.log(responseData); // Extract the 'results' array from the response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div  className='scrollbarnone container d-flex gap-3 overflow-x-scroll my-5' style={{paddingTop:'10vh'}}>
      {data.map((result, index) => (
        <div key={index}>
          <Indice symbol ={symbol} nom={result.T && result.T.split(':')[1]} price ={result.c}/>
        </div>
      ))}
    </div>
  );
};

export default ListIndices;
