import React, { Component } from 'react'
import yayJpg from '../assets/yay.jpg';
import './index.less'
import LeftSide from './../components/leftSide'

export default class index extends Component {


  onCallBack = (item) => {
    //在这里写路由事件
  }
  render() {
    return (
      <div className='indexContainer'>
        <div className='leftDiv'>
          <LeftSide onCallBack={this.onCallBack} />
        </div>
        <div className='rightDiv'>
          这里是这是内容
        </div>
      </div>
    )
  }
}
