import React from 'react'
import './assets/css/Header.css' 
import logo from './assets/img/Amazon-Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
  return (
    <div className='header'>
        <img className='header-logo' src={logo} alt='logo'/>
        <div className='header-search'>
            <input className='header-search-input'type='text'/>
            <SearchIcon className='header-searchicon'/>
        </div>
        <div className='header-nav'>
            <div className='header-option'>
            <span className='header-optionLineone'>Hello Tony</span>
            <span className='header-optionLinetwo'>Sign In</span>
            </div>
            <div className='header-option'>
            <span className='header-optionLineone'>Returns</span>
            <span className='header-optionLinetwo'>& Orders</span>
            </div>
            <div className='header-option'>
            <span className='header-optionLineone'>Your</span>
            <span className='header-optionLinetwo'>Prime</span>
            </div>
            <div className='header-optionbasket'>
                <ShoppingCartOutlinedIcon/>
                <span className='header-optionLinetwo header-basketcount'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header