import React,{Component}from"react";
import { Link } from "react-router-dom";
import { Route,Switch,Redirect } from "react-router-dom";
import NavBar1 from './sideNav';
import Folder from './folder';
import Message from './message';
import NavBar from './navBar';
import Welcome from "./welcome";
import Compose from "./compose";
import Search from "./search";
class Email extends Component
{   state=
    {   navs:["Inbox","Social","Drafts","Work","Sent"], 
        data:[
            {id: 121,sent: false,from: "tweets@twitter.com",to: "jack@test.com",subject: "18 tweets from those you follow",text: "Go to your twitter page and see the tweets from those you follow.",folder: "Social"},
            {id: 141,sent: true,from: "jack@test.com",to: "mary@test.com",subject: "Bug 461 in Customer Flow",text:"When the checkbox is left unchecked and the option Important is selected in the dropdown, clicking on Submit, shows no results.",folder: "Sent"},
            {id: 158,sent: false,from: "email@facebook.com",to: "jack@test.com",subject: "New post from William Jones",text:"William Jones has just uploaded a new post -How i loved the Avengers Endgame.",folder: "Social"},
            {id: 177,sent: true,from: "jack@test.com",to: "williams@test.com",subject: "Movie tomorrow",text: "Avengers Endgame is releasing tomorrow. Wanna see.",folder: "Sent"},
            {id: 179,sent: false,from: "williams@test.com",to: "jack@test.com",subject: "Re: Movie tomorrow",text:"The movie is supposed to be a blast. Lets do the 8:30 show. Want to have a quick bite before.",folder: "Inbox"},
            {id: 194,sent: false,from: "retweet@twitter.com",to:"jack@test.com",subject: "Your tweet has been retweeted by Thomas",text:"Your tweet on the Marvel Superheroes and Avengers has been retweeted bt Thomas. It has now 41 retweets and 27 likes.",folder: "Social"},
            {id: 204,sent: true,from: "jack@test.com",to: "jack@test.com",subject: "To do on Friday",text: "Test the bugs on the employee form in Release 0.7.9 and fix them.",folder: "Work"},
            {id: 255,sent: true,from: "mary@test.com",to: "jack@test.com",subject: "Release 0.8.4 deployed",text: "Release 0.8.4 has been deployed in the test environment.",folder: "Inbox"},
            {id: 278,sent: false,from: "mary@test.com",to: "jack@test.com",subject: "Re: Bug 461 in Customer Flow",text:"The bug has been fixed in the release 0.8.7. \nPlease test the issue and close it.\nCan you do it but tomorrow\nMary",folder: "Work"},
            {id: 281,sent: true,from: "jack@test.com",to: "mary@test.com",subject: "Re: Re: Bug 461 in Customer Flow",text: "Bug 461 has been closed.\nRegards,\nJack",folder: "Sent"},
            {id: 289,sent: false,from: "email@facebook.com",to: "jack@test.com",subject: "5 Shares, 2 Posts from your friends",text:"Jack, while you were away, your friends are having fun on Facebook.\nDon't miss their posts.\nKeep up with your friends.",folder: "Social"}
        ],
        list:[],
        message:[],
        deleteList:[],
        search:"",
        filter:-1,
        readMess:"",
        activeIndex:-1,
    }
    async fetchData()
    {   this.setState({list:this.state.data,data:this.state.data});
    }
    componentDidMount()
    {   this.fetchData();
    }
    componentDidUpdate(prevProps,prevState)
    {   if(prevProps!==this.props) this.fetchData();
    }
    handleMail=(index)=>
    {   let s1={...this.state}
        s1.filter=index;
        switch(index)
        {   case 0:s1.list=s1.data.filter(st=>st.folder==="Inbox");
            break;
            case 1:s1.list=s1.data.filter(st=>st.folder==="Social");
            break;
            case 2:s1.list=s1.data.filter(st=>st.folder==="Drafts");
            break;
            case 3:s1.list=s1.data.filter(st=>st.folder==="Work");
            break;
            case 4:s1.list=s1.data.filter(st=>st.folder==="Sent");
            break;
        }
        s1.activeIndex=index;
        s1.messageCode=false;
        this.setState(s1);
    }
    handleRead=(str)=>
    {   let s1={...this.state};
        let folder=s1.data.find(st=>st.id===str.id)
        folder.read=true;
        s1.message=folder;
        s1.messageCode=true;
        this.setState(s1)
    }
    handleBack=()=>
    {   let s1={...this.state};
        s1.messageCode=false;
        this.setState(s1)
    }
    handleDelete=()=>
    {   let s1={...this.state};
        for(let i=0;i<s1.deleteList.length;i++)
        {   let index=s1.data.findIndex(st=>st.id===+s1.deleteList[i])
            s1.data.splice(index,1);
            let index1=s1.list.findIndex(st=>st.id===+s1.deleteList[i])
            if(index1>-1)
            {s1.list.splice(index1,1);}
        }
        s1.deleteList=[];
        this.setState(s1);
    }
    handleMessage=(message)=>
    {   let s1={...this.state};
        let index=s1.data.length;
        let mess={...message,folder:"Sent",sent:true,id:(s1.data[index-1].id+1).toString(),from:"jack@test.com"}
        s1.data.push(mess);
        s1.message=mess;
        this.setState(s1);
    }
    handleChange=(str)=>
    {   let s1={...this.state};
        s1.list=s1.data.filter(st=>st.from.toLowerCase().includes(str.toLowerCase())||st.to.toLowerCase().includes(str.toLowerCase())||st.text.toLowerCase().includes(str.toLowerCase())||st.subject.includes(str))
        s1.search=str;
        this.setState(s1);
    }
    handleOP=(item)=>
    {   let s1={...this.state};
        s1.deleteList=item;
        this.setState(s1);
    }
    handleOption=(option)=>
    {   let s1={...this.state};
        for(let i=0;i<s1.deleteList.length;i++)
        {   let index=s1.data.findIndex(st=>st.id===+s1.deleteList[i])
            s1.data[index].folder=option;
        }
        s1.deleteList=[];
        this.setState({deleteList:[],data:s1.data});
    }
    handlereadMess=(id)=>
    {   let s1={...this.state};
        s1.readMess=s1.data.find(st=>st.id===+id);
        this.setState(s1);
        window.location=`/message`;
    }
    render()
    {   let{navs,data,list,activeIndex,search,deleteList,filter,readMess}=this.state;
        console.log(deleteList)
        return(
        <div className="container-fluid m-0 p-0">
            <NavBar data={data} search={search} onChange={this.handleChange}/>
            <div className="row">
                <div className="col-2">
                    <div className="row p-2 m-2">
                        <Link to="/compose"><button className="btn btn-primary btn-sm">Compose</button></Link>
                    </div>
                    <div className="row p-2 m-2">
                        <Link to="/welcome">{navs.map((st,index)=><NavBar1 navbar={st} data={data} index={index} active={activeIndex} onChange={this.handleMail}/>)}
                    </Link>    
                    </div>
                </div>
                <div className="col-10">
                    <br/>
                    <Switch>
                        <Route path="/message" render={(props)=><Message readMess={readMess}/>}/>
                        <Route path="/compose" render={(props)=><Compose data={list} onMessage={this.handleMessage} />}/>
                        <Route path="/welcome" render={(props)=><Welcome data={list} deleteList={deleteList?deleteList:""} onChangeOP={this.handleOP} onDelete={this.handleDelete} onOption={this.handleOption} onChange={this.handleMail} filter={filter} onReadMess={this.handlereadMess}/>}/>
                        <Redirect from="/" to="/welcome" />
                    </Switch>
                </div>
            </div>
        </div>)
    }

}export default Email ;
