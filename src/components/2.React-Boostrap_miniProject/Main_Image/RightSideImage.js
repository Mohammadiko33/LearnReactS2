import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import './RightSideImage.css'

export default class RightSideImage extends Component {
  render() {
    return ( 
      <div>
        <Image src='2.Boostrap_miniProject/image1.png' className='mainImage' alt='raect' thumbnail />
      </div>
    )
  }
}
// توضیحات 
// thumbnail کلا سایز عکس رو قیکس و کوچیکش میکنه