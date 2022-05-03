import React,{Component}from"react";
import { Link } from "react-router-dom";
import Folder from "./folder";
class Welcome extends Component
{   state={
    data:this.props.data,    
    data1:["Inbox","Social","Drafts","Work","Sent"],
    select:"",
    }
    async fetchData()
    {   this.setState({data:this.props.data});

    }
    componentDidMount()
    {   this.fetchData();
    }
    componentDidUpdate(prevProps,prevState)
    {   if(prevProps!==this.props) this.fetchData();
    }
    handleChange=(e)=>
    {   let {currentTarget:input}=e;
        let s1={...this.state};
        s1.select=input.value;
        this.props.onOption(s1.select);
        this.props.onChange(this.props.filter)
    }
    makeDrop=(arr,value,name,lable)=>
    (  <div className="form-group m-2">
           <select 
           className="form-control fa"
           name={name}
           value={value}
           onChange={this.handleChange}
           >
               <option value="" class="fa">&#xf00c;{lable} </option>
               {arr.map(opt=>(
                   <option>{opt}</option>
               ))}
           </select>
       </div>
   )
    
    render()
    {   let{data,onDelete,deleteList,onChangeOP,onReadMess}=this.props;
        let{select,data1}=this.state;
        return(
            <div className="container m-0 p-0">
                {data.length>0?<h6>Showing Message 1-{data.length}</h6>:<h6>There are No Message</h6>}
                {deleteList.length>0?
                <React.Fragment>
                    <div className="row">
                        <div className="col-3"><button className="btn btn-primary m-2" onClick={onDelete}>Delete</button></div>
                        <div className="col-3">{this.makeDrop(data1,select,"select","Move To")}</div>
                    </div>
                </React.Fragment>
                :""}
                {data.map(st=><Folder fold={st} deleteList={deleteList} onChangeOP={onChangeOP} onReadMess={onReadMess}/>)}
            </div>
            )
    }

}export default Welcome ;
