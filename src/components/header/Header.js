import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <a href="#" className="logo">HABR</a>
                <div className="header-right">
                    <Link to="/posts">Все</Link>
                    <Link to="/onePost">Один пост</Link>
                    <a href="#">Новости</a>
                    <a href="#">Статьи</a>
                </div>
            </div>
        )
    }
}

export default Header;