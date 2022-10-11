import React, { Component } from 'react'

import './leftSide.less'

export default class leftSide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{
                title: "前端",
                id: 1,
                content: "/front"
            },
            {
                title: "后端",
                id: 1,
                content: "/backend"
            },
            ]
        }
    }
    render() {
        const { list } = this.state;
        return (
            <div>
                <div className='leftSideContainer'>
                    {list.map(item =>
                        <div key={item.id} className='item'   onClick={()=>{this.props?.onCallBack(item)}}>
                            {item.title}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
