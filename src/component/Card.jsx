import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Card = () => {

  const [card, setCoin] = useState({});
  const { id } = useParams();


  useEffect(() => {
    const fetchCoin = async () => {
      const response = await axios.get(`http://localhost:3002/coins/${id}`);   
      setCoin(response.data[0]);
    };

    fetchCoin();
  }, [id]);


  console.log(card.description)


  return (
      <div className='card_container'>
          <div className='card_panel'>
              <div className='card_panel_images'>
                <img src={`${process.env.PUBLIC_URL}/images/${card.file_name}`}/>
                <img src={`${process.env.PUBLIC_URL}/images/${card.file_name2}`}/>
              </div>
              <div className='card_panel_info'>
                <h3>{card.name}</h3>
                <p className='card_panel_title'>{card.description_title}</p>
                <p>{card.description}</p>
                <table>
                  <tbody>
                    <tr>
                      <td>Issuing Country</td>
                      <td>{card.issuing_country}</td>
                    </tr>
                    <tr>
                      <td>Composition</td>
                      <td>{card.composition}</td>
                    </tr>
                    <tr>
                      <td>Quality</td>
                      <td>{card.quality}</td>
                    </tr>
                    <tr>
                      <td>Denomination</td>
                      <td>{card.denomination}</td>
                    </tr>
                    <tr>
                      <td>Year</td>
                      <td>{card.year}</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>{card.weight}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{card.price}$</td>
                    </tr>
                  </tbody>
                </table>
                <Link to ={"/coins"}>Back to List</Link>
              </div>
          </div>
      </div>
  );
}

export default Card;