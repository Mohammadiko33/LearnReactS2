import React from 'react'
import { Container } from 'react-bootstrap'
// import { Routes , Route , Link} from 'react-router-dom'
import { Outlet , Link} from 'react-router-dom'

export default function About() {
  return (
    <Container className='mt-5'>    
     <h1 style={{textAlign: "center"}}><Link style={{color: 'blue' , fontSize: "inherit"}} to={'/About/crips'}>crips</Link> and <Link style={{color: 'red' , fontSize: "inherit"}} to={'/About/blood'}>blood</Link> </h1>
     <hr/>
     <Outlet />
     {/* <Routes>
      <Route path='crips' element={<h1 style={{textAlign: 'center'}}>crips</h1>} />
      <Route path='blood' element={<h1 style={{textAlign: 'center'}}>blood</h1>} />
     </Routes> */}
    </Container>
  )
}

// واسه اینکه ساب روت هامون هم برای همین ابات به حساب بیان یعنی بعد ابات هر جیزی که اینجا برای ما رندر بشه برای ما توی روت وارد بشه بیاد برای ما همین کامپوننت ابات رو فراخانی بکنه پس قدم اینکه بیایم داهل و بگیم زمانی که اومد   
// ما زمانی که میخایم از اتا استفاده بکنیم بع این معناست هیعنی اول روتمون با اسلش شروع بشه و سپس هر چیزی مه بود برلی نا نپس هر چیزی که بود بازهم برای ما لیت کامپوننت ابات دتدر 

// این استاره که جای لینک ها میزاریم فقط فقط باید اخر پچ روت باشه 
// sablearn/reactJS/sittingیعنی استریتگ میشه زیر شاخه ریاکت 
// من العان چونکه داخل ابات جی اس هستم برلی من روت داشبودر مج میکنه و پیداش میکنه و زیر محتوای اصلی برای من تگ پی داشبورد نشان داده مبشع

// فقط تو ساب روت ها که اول لینک نیاز به اسلش اوکی اگه اسلش بزاریم اونوقت میاد از روت اصلی ستینگ به حساب میاد پس توی ساب روت ها به هیچ انوان از اسسلش استفاده نکنیم

// اوت لت یعنی روت هارو داخل تگ باز و بسته پرنت اجراکردیم ذخیره کردیم