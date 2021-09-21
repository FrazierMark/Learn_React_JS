import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            

            <div className="header_search">
                <input className="header__searchInput"
                        type="text"/>
            </div>

            <div className="header__nav">

            </div>

        </div>
    )
}

export default Header
