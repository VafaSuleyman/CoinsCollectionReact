import React, { useState, useEffect } from 'react';
import Header from './component/Header'
import Filter from './component/Filter'
import Group from './component/Group'

const Main = () => {
  
    return (
      <div className='container_panel'>
        <Header />
        <Filter />
        <Group />
      </div>
    )
  }
  
  export default Main;