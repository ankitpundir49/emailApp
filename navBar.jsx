import React,{Component}from"react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import Search from "./search";
class NavBar extends Component
{   render()
    {   let{search,onChange}=this.props;
        return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                MyMessage
            </Link>
            <div className="">
                <ul className="navbar-nav mr-auto nav-menu">
                    <li className="form-control m-0 p-0">
                        <Search str={search?search:""} onChange={onChange}/>
                    </li>
                </ul>
            </div>
        </nav>)
    }

}export default NavBar;