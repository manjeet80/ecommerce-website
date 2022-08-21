import React, { useContext } from 'react'
import {BsCartPlusFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { CardContext } from '../Global/CardContext'
const Navbar = () => {
    const {qty} = useContext(CardContext)
  return (
   <nav>
    <ul className="left">
        <li><Link to="/">India Express</Link></li>
    </ul>
    <ul className="right">
        <li>
            <Link to="cart"><span className='shoppingCart'><BsCartPlusFill/></span><span className='cartCount'> Cart ({qty})</span></Link>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar
