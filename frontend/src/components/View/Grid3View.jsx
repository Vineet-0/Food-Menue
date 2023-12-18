import React from 'react'

const Grid3View = ({data,img}) => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {data.map((item, index) => (
                <div key={index} className='w-full h-auto bg-white flex flex-col gap-2 items-center justify-between p-2'>
                    <div className='w-full flex items-center justify-center border-2 border-gray-300'>
                        <img src={item.img} className=''/>
                    </div>
                    <div className='bg-purple-300 w-full h-full flex flex-col items-between justify-start'>
                        <div>
                            {item.name}
                        </div>
                        <div>
                            {item.rating}
                        </div>
                        <div>
                            {item.price}
                        </div>
                        <div>
                            {item.time}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Grid3View