import React from 'react';
import S from './Post.module.scss'
import {useSelector} from "react-redux"
function Post(props) {
    const loaded = useSelector(state => state.itemLoaded)
    return (
        <div className={S.container}>
            {Object.keys(loaded).map((Key)=>{
                return <div>
                    <h6>{Key}</h6>
                    <p>{loaded[Key]}</p>
                </div>
            })}
        </div>
    );
}

export default Post;