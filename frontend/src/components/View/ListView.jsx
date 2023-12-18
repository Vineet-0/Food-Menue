import React from 'react'

const ListView = ({data}) => {
    return (
        <div className='flex flex-col gap-4'>
            {data.map((item, index) => (
                <div key={index} className='w-full h-auto bg-white rounded-xl border-2 border-slate-200 flex flex-row gap-2 items-center justify-between p-2'>
                    <div className='w-fit min-w-[150px]'>
                        {item.img
                            ?
                                <img src={item.img} className=''/>
                            :
                                <div className='w-full h-24 rounded-md bg-red-300'>
                                </div>
                        }   
                    </div>
                    <div className=' w-full h-full flex flex-col items-between justify-start'>
                        <div>
                            {item.catalogue_name}
                        </div>
                        <div>
                            {item.full_price}
                        </div>
                        <div className=''>
                        {item.veg=='true'
                            ?  
                                <div className='w-4 h-4 rounded-full bg-green-300'>
                                </div>
                            :
                                <div className='w-4 h-4 rounded-full bg-red-300'>
                                </div>
                        }
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListView