import React,{Component}from"react";
class Message extends Component
{   render()
    {   let{readMess}=this.props;
        return(
        <div className="container-fluid">
            <div className="row border">
                <h6>From:{readMess.from}</h6>
            </div>
            <div className="row border">
                <h6>To:{readMess.to}</h6>
            </div>
            <div className="row border">
                <h6>Subject:{readMess.subject}</h6>
            </div>
            <div className="row border">
                <h6>{readMess.text}</h6>
            </div>
            <div className="row border">
                <h6>Regards,</h6>
            </div>
        </div>)
    }
    
}export default Message;