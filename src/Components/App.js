import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './List/List';
import { removeFromMyList, addFromRecommendList, getMovieList } from '../Actions/index'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.myListTitle = this.myListTitle.bind(this);
  }

  componentDidMount(){
    this.props.getMovieList();
  }

  myListTitle(list) {
    const titles = [];
    list.length===0 ? 
    titles.push(<div className="no-data" key="empty">No Item! </div>) : 
    list.map((comp,index) => {
      return titles.push(<span className='my-list-title' key={index}>{`${comp.title};`}</span>)
    })
      return titles;  
  }

  render() {
    const listTitle = this.myListTitle(this.props.mylist);
    const myList = {listTitle: "My List", btn: "Remove", emp: "My List is Emtpy"}
    const recommendList = {listTitle: "Recommend List", btn: "Add", emp: "Recommend List is Empty"}
    return (
      <div className="app">
        <img className='header' src="https://fthmb.tqn.com/0Lb_O1MGijQY4L8-UmzcS9MbPxo=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/netflixlogo-56a4b4183df78cf77283d151.jpg" alt='NETFLIX' />
        <div className='showbody'>
          <List
            List={this.props.mylist} 
            info={myList}
            click={this.props.removeFromMyList} 
            />

          <List
            List={this.props.recommendations}
            info={recommendList}
            click={this.props.addFromRecommendList}
            />
        </div>
        <div className="list-title">
          <h3>My List Titles</h3>
          {listTitle}
        </div>
      </div>

        
    );
  }
}

function mapStateToProps(state){
  return {
    mylist: state.mylist,
    recommendations: state.recommendations
  }
}
//connect necessary actions
function mapDispatchToProps(dispatch){
  return {
    getMovieList:()=>{
      dispatch(getMovieList())
    },
    removeFromMyList:(id)=>{
      dispatch(removeFromMyList(id))
    },
    addFromRecommendList:(id)=>{
      dispatch(addFromRecommendList(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
