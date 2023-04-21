import React, { useEffect, useRef } from 'react'

export default function Video() {
    const videoRef = useRef(null)

    const getUserCamera = ()=>{
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then((stream)=>{
            let video = videoRef.current;
            video.srcObject = stream;
            video.play()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getUserCamera()
    }, [])
  return (
    <>
        <video className='container rounded-5' ref={videoRef}></video>
    
    </>
  )
}
