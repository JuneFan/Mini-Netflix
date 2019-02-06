import React from 'react';

const MyListBlock = (props) => {
    let {MyListBlock, removeFromMyList} = props;
    return (
        <div className='showing-block'>
            <p>{MyListBlock.title}</p>
            <img src={MyListBlock.img} alt={MyListBlock.title} />
            <button onClick={()=> removeFromMyList(MyListBlock.id)} className='block-button'>Remove</button>
        </div>
    )
}

export default MyListBlock;