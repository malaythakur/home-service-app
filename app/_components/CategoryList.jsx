import React from 'react'
import Image from 'next/image'


function CategoryList({categoryList}) {
  return (
    <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-3
    md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {
            categoryList.length>0?categoryList.map((category, index)=>(
                <div key={index} className={`flex flex-col items-center justify-center gap-2
                bg-[#E0F7FA]  p-5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out`}>
                    
                    {}
                    <Image src={category.icon.url}
                    alt='icon'
                    width={35}
                    height={35}
                    />


                    <h2 className='text-primary'>{category.name}</h2>
                </div>
                ))
                :
                    [1,2,3,4,5,6].map((item,index)=>(
                        <div key={index} className='h-[120px] w-full bg-[#F0F0F0] animate-pulse rounded-lg'>
                        
                        </div>
                    
                    ))

                }
           
    </div>
  )
}

export default CategoryList