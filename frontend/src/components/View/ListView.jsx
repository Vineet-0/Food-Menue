import React from 'react'

const ListView = ({data}) => {
    return (
        <div className='flex flex-col gap-4'>
            {data.map((item, index) => (
                <div key={index} className='w-full h-auto bg-white flex flex-row gap-2 items-center justify-between p-2'>
                    <div className='w-fit min-w-[150px] border-2 border-gray-300'>
                        {item.img
                            ?
                                <img src={item.img} className=''/>
                            :
                                <div className='w-full h-24 rounded-md bg-red-300'>
                                </div>
                        }   
                    </div>
                    <div className='bg-purple-300 w-full h-strech flex flex-col items-between justify-start'>
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