import React, { useState } from 'react'
import Card from '../components/Card';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import{BsFillArrowLeftCircleFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../assets/styles/myCardsPage.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const MyCardsPage = () => {
  return (
    <div>
      

      <h1 className="mainText centerElement">My Card <Link to={{pathname:"/createCard"}}><AiOutlinePlusCircle className='plus-icon'/></Link> </h1>

    <h2>Cards Name</h2>
    
    
    </div>
  )
}

export default MyCardsPage