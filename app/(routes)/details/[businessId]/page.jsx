"use client"
import { useSession } from 'next-auth/react'
import GlobalApi from '@/app/_services/GlobalApi';
import React, { useEffect, useState  } from 'react'
import { signIn } from 'next-auth/react';
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';
function BusinessDetail({params}) {

  const {data,status}=useSession();
  const [business,setBusiness]=useState([]);

   useEffect(()=>{
    params&&getbusinessById();
   }, [params])

   useEffect(()=>{
        checkUserAuth(); 
   })

   const checkUserAuth=()=>{
        if(status=='loading'){
            return <p>Loading...</p>
        }

        if(status=='unauthenticated'){
            signIn('descope');
        }
   }

   const getbusinessById=()=>{
    GlobalApi.getBusinessById(params.businessId).then(resp=>{
        setBusiness(resp.businessList);
    })
   }

   
   return status=='authenticated' &&business&&(
    <div className='py-8 md:py-20 px-10 md:px-36'>
        <BusinessInfo business={business} />

        <div className='grid grid-cols-4 mt-16'>
            <div className='col-span-4 md:col-span-3'>
                <BusinessDescription business={business}/>
            </div>

            <div className='hidden md:block'>
                <SuggestedBusinessList business={business}/>
            </div>
        </div>
        
    </div>
   )

}

export default BusinessDetail