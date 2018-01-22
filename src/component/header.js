import React, {Component} from 'react';


class Header extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            title:"Keyword are::",
            keywords:""
        }
    }

    inputChange(event){
        //console.log(event.target.value)
        this.setState({keywords: event.target.value})
        this.props.newsSearch(event.target.value)
    }
    render(){
        const styles ={
            header:{
                background:'blue'
            },
            logo:{
                color:'white'
            }
        }
        return(
            <header>
                <div  className="logo"
                onClick={()=>{console.log("clicked")}}>Logo</div>
                <input onChange={this.inputChange.bind(this)}/>
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
          
        )
    }
} 

export default Header;

/*
var add = () =>{

}*/