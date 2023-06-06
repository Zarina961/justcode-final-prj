import React from 'react';
import './NewsSmall.css'
function NewsSmall(props) {
    return (
            <div className='NewsSmall'>
                <div className='NewsSmall-img'>
                    <img src="../../../public/newsImg.png" alt="" />
                </div>
                <div className='NewsSmall-inf'>
                    <div className='NewsSmall-inf-header'>
                        <h2>{props.post.title}</h2>
                        <img src="../../../public/bookmark.png" alt="" />
                    </div>
                    <div className='NewsSmall-inf-text'>
                        <h3>
                            {props.post.description}
                        </h3>
                        <h4 className='NewsSmall-inf-text-author'>{props.post.creator}</h4>
                        <h4 className='NewsSmall-inf-text-data'>Thurday 09 2022</h4>
                    </div>
                </div>
            </div>
    );
}

export default NewsSmall;