import React from 'react';

const newsList =(props) =>{

    console.log(props.news)

    const items = props.news.map((item)=>{
        return(
            <div>
                <h3>{item.title}</h3>
                <div>{
                    item.feed
                }
                </div>
            </div>
        )
    })
    return(
        <div>
            {items}
        </div>
    )
}

export default newsList;