import React,{Component}from"react";
class Folder extends Component
{   state=
    {   deleteList:this.props.deleteList,

    }
    handleChange=(e)=>
    {   let {currentTarget:input}=e;
        let s1={...this.state};
        if(input.checked)
        s1.deleteList.push(input.value);
        else
        {   let index=s1.deleteList.findIndex((ele)=>ele===input.value);
            if(index>=0) s1.deleteList.splice(index,1)
        }
        this.props.onChangeOP(s1.deleteList);
        
    }
    message=(id)=>
    {   this.props.onReadMess(id);
    }
    render()
    {   let{fold}=this.props;
        let{folder,read,from,subject,text,id}=fold
        let{deleteList}=this.props;
        return(
            <div className="container  m-0 p-0">
                <div className="row border bg-light m-0">
                    <div className="col-1">
                        <input
                        type="checkbox"
                        checked={deleteList.find(st=>st===id.toString())?true:false}
                        value={id}
                        name="mail"
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-3">{read===false?<React.Fragment><a onClick={()=>this.message(id)}><b>{from==="jack@test.com"?"me":from}</b></a></React.Fragment>:<React.Fragment><a onClick={()=>this.message(id)}>{from==="jack@test.com"?"me":from}</a></React.Fragment>}</div>
                    <div className="col-3">{subject}</div>
                    <div className="col-5">{text}</div>
                    
                </div>
            </div>
            )
    }

}export default Folder ;
