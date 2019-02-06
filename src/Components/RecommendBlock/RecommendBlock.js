import React from 'react';
import './RecommendBlock.css';

const RecommendBlockComp = (props) => {
    let {RecommendBlock: {title, img, id}, addFromRecommendList}=props;
    return(
        <div className='showing-block'>
            <figcaption>{title}</figcaption>
            <img src={img} alt={title}/>
            <button onClick={()=> addFromRecommendList(id)} className='block-button'>Add</button>
        </div>
    )
}
export default RecommendBlockComp;