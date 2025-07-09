import React from 'react'
import { Typography , Button , List } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function App36() {
  return (
    <div style={{display: "flex" , justifyContent: "center" , alignItems: "center"}}>
       <Typography align='center' variant='h3' mt={50} style={{fontWeight: '900' , fontFamily: "fantasy" , letterSpacing: "0.3rem" , color: "#404040"}} variantMapping={"h6"}>ice cube - man dawn</Typography>
       <Button color='warning' variant='outlined'>delete <DeleteIcon></DeleteIcon></Button> 
    </div>
  )
}

// اگر در ایکون ها مقدار پراپ کالو تنظیم نشود ارس بری میشود
// ورینت میاد برای ما توع این دکمه رو مشخص میکنه 