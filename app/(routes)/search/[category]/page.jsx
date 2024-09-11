"use client";
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_services/GlobalApi';
import BusinessList from '@/app/_components/BusinessList';

function BusinessByCategory({ params }) {

 const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    console.log(params);
    params&&getBusinessList()
  },[params]);

  const getBusinessList=()=>{
    GlobalApi.getBusinessByCategory(params.category)
    .then(resp=>{
      setBusinessList(resp?.businessLists);
    })
  }

 
  return (
    <div>
        <BusinessList title={params.category} businessList={businessList}/>
    </div>
  );
}

export default BusinessByCategory;
