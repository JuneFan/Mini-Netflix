import React, { Component } from 'react';
import {connect} from 'react-redux';
import RecommendList from './RecommendList/RecommendList';
import MyList from './MyList/MyList';
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
    return (
      <div className="app">
        <img className='header' src="https://fthmb.tqn.com/0Lb_O1MGijQY4L8-UmzcS9MbPxo=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/netflixlogo-56a4b4183df78cf77283d151.jpg" alt='NETFLIX' />
        <div className='showbody'>
          <MyList
            MyList={this.props.mylist}
            removeFromMyList={this.props.removeFromMyList} />

          <RecommendList
            RecommendList={this.props.recommendations}
            addFromRecommendList={this.props.addFromRecommendList} />
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
