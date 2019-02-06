import React from 'react';
import Block from '../Block/Block';
import './List.css';

class List extends React.Component{

    constructor(props) {
        super(props);
        this.renderBlock = this.renderBlock.bind(this);
    }

    renderBlock(list, info){
        return list.length ===0 ? 
        <div className="empty-block">
            <p className="no-data">{info.emp}</p>
        </div> :
         list.map((comp, index) => {
            return <Block key={index} RecommendBlock={comp} {...this.props} />
        })
    }

    render() {
        console.log("thisprops,", this.props);
        let {List, info} = this.props;
        const renderList = this.renderBlock(List, info)
        return(
            <div className='list-wrapper'>
                <h2>{info.listTitle}</h2>
                <div className='list-view'>
                    {renderList}
                </div>
            </div>
        )
    }
}

export default List;