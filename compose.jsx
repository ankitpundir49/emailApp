import React,{Component} from "react";
import http from "../services/httpService";
class Compose extends Component
{   state=
    {   compose:{to:"",subject:"",text:""},
    }
    handleChange=(e)=>
    {   const {currentTarget:input}=e;
        let s1={...this.state};
        s1.compose[input.name]=input.value;
        this.setState(s1);
    }
    handleSubmit=(e)=>
    {   e.preventDefault();
        const {compose}=this.state;
        console.log(compose)
        this.props.onMessage(compose);
    }
    render()
    {   let{to,subject,text}=this.state.compose;
        return(
            <div className="container p-0 m-0">
                <lable>To:</lable><br/>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="to"
                        name="to"
                        value={to}
                        onChange={this.handleChange}
                        />
                </div><br/>
                <lable>Subject:</lable><br/>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={this.handleChange}
                        />
                </div><br/>
                <lable>Message:</lable><br/>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="text"
                        name="text"
                        value={text}
                        onChange={this.handleChange}
                        />
                </div><br/>
                <h1 className="text-center">
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </h1>
            </div>
            
        )

    }

}export default Compose;
