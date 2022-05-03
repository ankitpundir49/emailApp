import React,{Component}from"react";
import { Link } from "react-router-dom";
class Search extends Component
{   state=
    {   str:this.props.str,

    }
    handleChange=(e)=>
    {   let {currentTarget:input}=e;
        let s1={...this.state};
        s1.str=input.value;
        this.setState(s1);
        this.props.onChange(s1.str);
    }
    render()
    {   let {str}=this.props;
        return(
            <div className="row">
               <div className="col-12">
               <input
                    type="text"
                    className="form-control"
                    name="str"
                    value={str}
                    placeholder="Search"
                    onChange={this.handleChange}
                    />
               </div>
            </div>
            
            )
    }

}export default Search;