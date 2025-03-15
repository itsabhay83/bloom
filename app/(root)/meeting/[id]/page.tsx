"use client";
import React from 'react'

import { Button } from '../../../../components/ui/button'
import { useParams } from "next/navigation";


const Meeting = () => {
    const params = useParams();
    const onClickHandler =  () =>{
        alert('Joining Meeting')
    }
    
  return (
    <>
     <div> My Meeting : #{params.id}</div>
     <Button onClick={onClickHandler}>Join</Button>
     </>
  )
}

export default Meeting