import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './component/Header'
import Filter from './component/Filter'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [filter, setFilter] = useState({name: '', composition: ''});
  const location = useLocation();
  

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await axios.get(`http://localhost:3002/coins${location.search}`);
      setCoins(response.data);
    };

    fetchCoins();
  }, [location]);

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredCoins = coins.filter((coin) => {
    if (filter.name && !coin.name.toLowerCase().includes(filter.name.toLowerCase())) {
      return false;
    }
    if (
      filter.composition &&
      !coin.composition.toLowerCase().includes(filter.composition.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className='container_panel'>
      <Header />
      <Filter setFilter={handleFilter} />
      <div className='cards_panel'>
        {filteredCoins.map((coin) => (
          <Link className='cards_panel_item' key={coin.id} to={{pathname: `/coins/${coin.id}`}}>
              <img className="cards_img" src={`${process.env.PUBLIC_URL}./images/${coin.file_name}`}/>
              <div className="cards_body">
                <h4 className="cards_title">{coin.name}</h4>
                <p className="card_text">{coin.description_title}</p>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Coins;