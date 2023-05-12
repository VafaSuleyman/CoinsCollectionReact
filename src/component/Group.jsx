import React from 'react';
import { Link } from 'react-router-dom';

const Group = () => {
  return (
    <ul className='group_panel_ul'>
      <li>
        <h2>Bullion coins</h2>
        <Link to={{
          pathname: '/coins',
          search: '?type=investments'
        }}> Show All   &#62;</Link>
        <img src={`${process.env.PUBLIC_URL}/images/South Vietnamese Dong_1.png`} alt="South Vietnamese Dong" />
      </li>
      <li>
        <h2>Exclusive coins</h2>
        <Link to={{
          pathname: '/coins',
          search: '?type=exclusive'
        }}> Show All   &#62;</Link>
        <img src={`${process.env.PUBLIC_URL}/images/ISK_2.png`} alt="ISK" />
      </li>
      <li>
        <h2>Commemorative coins</h2>
        <Link to={{
          pathname: '/coins',
          search: '?type=memorable'
        }}> Show All   &#62;</Link>
        <img src={`${process.env.PUBLIC_URL}/images/Looney_1.png`} alt="Looney" />
      </li>
    </ul>
  );
}

export default Group;


