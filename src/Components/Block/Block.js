import React from 'react';
import './Block.css';

const Block = (props) => {
    let {RecommendBlock: {title, img, id}, click, info}=props;
    return(
        <div className='showing-block'>
            <figcaption>{title}</figcaption>
            <img src={img} alt={title}/>
            <button onClick={()=> click(id)} className='block-button'>{info.btn}</button>
        </div>
    )
}
export default Block;