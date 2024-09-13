import React from 'react';  
import Image from 'next/image';
import { Clock, Mail, MapPin, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
function BusinessInfo({business}) {
  return  business?.name&&(
    <div className='md:flex gap-4 items-center'>
        <Image
          src={business?.images[0]?.url}
          alt={business.name}
          width={150}
          height={200}
          primary
          className="rounded-full h-[150px] object-cover"
        />
      
        <div className='flex justify-between items-center w-full'>
            <div className='flex flex-col mt-4 md:mt-0 items-baseline gap-3'>
            
            <h2 className='text-primary p-1 px-3 text-lg bg-[#E0F7FA] rounded-full'>{business?.category?.name || 'No Category'}</h2>
            <h2 className='text-[40px] font-bold'>{business.name}</h2>
            <h2 className='flex gap-2 text-lg text-gray-500'><MapPin />{business.address}</h2>
            <h2 className='flex gap-2 text-lg text-gray-500'>
                <Mail/>
                {business.email}
            </h2>

            </div>
            <div className='flex flex-col gap-5 items-end'>
                <Button><Share/></Button>
                <h2 className='flex gap-2 text-xl text-primary'><User/>{business.contactPerson}</h2>
                <h2 className='flex gap-2 text-xl text-gray-500'><Clock />Available 8:00 AM to 10:00 PM</h2>

            </div>
        </div>
    </div>
  )
}

export default BusinessInfo