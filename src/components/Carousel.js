import React, { useEffect, useState } from 'react'
import CarouselCard from './CarouselCard'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Carousel({blogs}) {
  const [idx,setIdx] =  useState(0)

  useEffect(() => {
    console.log('idx: ',idx);
    if(idx < 0) setIdx(blogs?.length - 1)
    else if(idx > blogs?.length - 1) setIdx(0)
    setTimeout(() => {
      if(idx === blogs?.length - 1) setIdx(0)
      else setIdx(idx + 1)
    }, 10000)
  }, [idx])
    return (
    <div className='flex flex-row flex-wrap relative w-full h-[400px]'>
        {blogs && <CarouselCard blog={blogs[idx]}/>}
        {/* <div className='flex flex-row items-centerjustify-between w-full self-end p-4'>
            <ArrowCircleLeftOutlinedIcon onClick={()=>{setIdx(prev=>prev-1)}}/>
            <ArrowCircleRightOutlinedIcon onClick={()=>{setIdx(prev=>prev+1)}}/>
        </div> */}
    </div>
  )
}

export default Carousel