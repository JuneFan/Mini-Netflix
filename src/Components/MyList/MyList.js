import React from 'react';
import MyListBlock from '../MyListBlock/MyListBlock';
import './MyList.css';

class MyList extends React.Component {
    constructor(props){
        super(props);
        this.renderMyListBLock = this.renderMyListBLock.bind(this);
    }

    renderMyListBLock(list) {
        return list.length === 0 ?
            <div className="empty-block">
                <p className="no-data">Make Your List</p>
            </div>:
            list.map((comp,index) => {
                return <MyListBlock key={index} MyListBlock={comp} {...this.props}/> 
            })
    }

    render() {
        const renderList= this.renderMyListBLock(this.props.MyList);
        return(
            <div className='list-wrapper'>
                <h2>My List</h2>
                <div className='list-view'>
                    {renderList}
                </div>
            </div>
        )
    }
}

export default MyList;