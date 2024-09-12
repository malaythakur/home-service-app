"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import { signIn } from 'next-auth/react';
function BusinessDetail() {

  const {data,status}=useSession();
  
   if(status=='loading'){
        return <p>Loading...</p>
   }

   if(status=='unauthenticated'){
        signIn('descope');
   }
   
   return status=='authenticated' &&(
    <div>BusinessDetail</div>
   )

}

export default BusinessDetail