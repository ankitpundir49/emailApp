import React,{Component}from"react";
class NavBar1 extends Component
{   getCount=(arr,name)=>
    {   return arr.reduce((acc,curr)=>curr.folder===name?acc+1:acc,0);

    }
    render()
    {   let{navbar,index,onChange,data,active}=this.props;
        return(
        <React.Fragment>
            <div className="row">
                <a className={active===index?"bg-warning nav-link text-dark":"nav-link text-dark"} onClick={()=>onChange(index)}>{navbar}({this.getCount(data,navbar)})</a>
            </div>
        </React.Fragment>)
    }
    
}export default NavBar1;