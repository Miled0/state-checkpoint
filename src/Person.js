import React from 'react';
class Person extends React.Component{
    state={
        fullname:"Cristiano Ronaldo",
        bio:("Cristiano Ronaldo dos Santos Aveiro, couramment appelé Ronaldo ou Cristiano Ronaldo et surnommé CR7, né le 5 février 1985 à Funchal, est un footballeur international portugais qui évolue au poste d'attaquant à Manchester United."),
        imgSrc:"https://le10static.com/img/master/0000/0019/199779.jpeg",
        profession:"Footballeur international",
        timer:0,
        interval:null
    } 
      componentDidMount(){
        this.setState({
          interval:setInterval(() => {
          this.setState({timer:this.state.timer+1})
  
          }, 1000),
      })
    }
      componentWillUnmount(){
        clearInterval(this.state.interval)
      }
    
  render(){
    return(
      <>
      <div className='profile'>
          <img src={this.state.imgSrc} alt="Cristiano Ronaldo" width="100px" height="100px" style={{borderRadius:"50%"}}></img>
          <h1>{this.state.fullname}</h1>
          <h3>{this.state.profession}</h3>
          <p>{this.state.bio}</p>
          <h1>{this.state.timer}</h1>
        </div>
        
        
        </>
);}
  };
  export default Person