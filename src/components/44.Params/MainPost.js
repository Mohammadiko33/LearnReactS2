import React , { useState } from 'react'
import { useParams , Navigate } from 'react-router-dom'
import paramDatas from './Params'
import { Container } from 'react-bootstrap'

export default function MainPost() {

  let params = useParams()
  const [ posts , setPosts] = useState(paramDatas)

let hasPost = posts.some(post => post.id == params.postID)
let results = posts.find(post => post.id == params.postID)



return (
  <Container className='mt-5'>
      {!hasPost ? (       
        <Navigate to={'/'}/>
      ): (
           <div className="product">
       <div className="noPadding">
       <div ><p className='Product_title'>{results.title}</p> <span>{results.company}</span> <span >{results.color}</span></div>
        <p className="productAbout">Cpu : {results.cpu} | Ram : {results.ramSpace} | GraphicCard: {results.graphicCard} | Hard: {results.hardSpace} | inchManitor: {results.inchManitor}</p>   
       <p className='product_price'>Price : {results.price}</p></div><button className='btn btn-primary'>buy product</button>
     </div>
      )}

    </Container>
  )
}
// نوی گیت برای مدریت اینکه اگر صحفه ای نبود چه اتفاقی بیوفتد