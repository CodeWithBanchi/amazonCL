import React from 'react'
import "./Header.css";
import  { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import WorkIcon from '@material-ui/icons/Work';
// 

function Header() {
    return (
        <nav className="header">
            <Link to="/">
             <img className="header__logo"
               src="https://i.ibb.co/6Xt4Qq1/logo-png.png"
                 alt=""
             />
            </Link>
           

           
            
           <div className="header__search">
              <input type="text" className="header__searchInput"/>
                 <SearchIcon className="header__searchIcon" />

           </div>
         

          
            <div className="header__nav">
               <Link to="/"  className="header__link">
                     <div className="header__option">
                          <span className="header__optionLineOne"> Hellow</span>
                         <span className="header__optionLineTwo">Sign In</span>

                    </div>
               </Link>





               <Link to="/"  className="header__link">
                  <div className="header__option">
                     <span className="header__optionLineOne"> visit</span>
                     <span className="header__optionLineTwo">Profile</span>

                  </div>
               </Link>

               {/*third link*/} 

               <Link to="/"  className="header__link">
                  <div className="header__option">
                      <span className="header__optionLineOne"> FAQ </span>
                      <span className="header__optionLineTwo">& help</span>

                  </div>
               </Link>
 


               <Link to="/checkout" className="header__link">
                  <div className="header__optionBasket">
                       <WorkIcon/>
              
                           <span className="header__optionLineTwo header__basketcount">0</span>

                
                  </div>
               </Link>
            </div>
        </nav>
    );
}
export default Header;
