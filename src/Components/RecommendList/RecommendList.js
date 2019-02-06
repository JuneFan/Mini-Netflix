import React from 'react';
import RecommendBlock from '../RecommendBlock/RecommendBlock';
import './RecommendList.css';

class RecommendList extends React.Component{

    constructor(props) {
        super(props);
        this.renderRecommendBlock = this.renderRecommendBlock.bind(this);
    }

    renderRecommendBlock(list){
        return list.length ===0 ? 
        <div className="empty-block">
            <p className="no-data">Recommend List Is Empty</p>
        </div> :
         list.map((comp, index) => {
            return <RecommendBlock key={index} RecommendBlock={comp} {...this.props} />
        })
    }

    render() {
        const renderList = this.renderRecommendBlock(this.props.RecommendList)
        return(
            <div className='list-wrapper'>
                <h2>Recommend List</h2>
                <div className='list-view'>
                    {renderList}
                </div>
            </div>
        )
    }
}

export default RecommendList;