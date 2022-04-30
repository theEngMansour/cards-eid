import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from 'components';

export default function Index() {
    const [name, setName] = useState('')
    const handlerName = (e) => {
        setName(e.target.value)
    }
  return (
    <React.Fragment>
        <div className="bg-white shadow-sm">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center text-center items-center flex-col mb-5 sm:mb-10">
                    <img src={'/logoanimated.svg'} width={'290px'} height={'190px'} alt='logo'/>
                    {/* <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online </p> */}
                </div>
                <input type={'text'} className='bg-white border-2 border-gray-600 text-gray-600 w-64 py-2 outline-none rounded-3xl px-3 h-2/5' placeholder='إدخل اسمك هنا' onChange={handlerName} />
                <button style={{ backgroundColor: '#00c37d'}} className="px-12 text-white select-none rounded-xl mt-6 py-2 outline-none focus:outline-none hover:bg-green-400">إنشاء</button>
            </div>
        </div>
        <Card name={name} image={'/file/1.jpg'} />
        <Card name={name} image={'/file/2.jpg'} />
        <Card name={name} image={'/file/3.jpg'} />
        <Card name={name} image={'/file/4.jpg'} />
        <Card name={name} image={'/file/5.jpg'} />
        <Card name={name} image={'/file/6.jpg'} />
        <Card name={name} image={'/file/7.jpg'} />
        <Card name={name} image={'/file/8.jpg'} />
        <Card name={name} image={'/file/9.jpg'} />
        <Card name={name} image={'/file/10.jpg'} />
        <Card name={name} image={'/file/11.jpg'} />
        <Card name={name} image={'/file/12.jpg'} />
        <Card name={name} image={'/file/13.jpg'} />
        <Card name={name} image={'/file/14.jpg'} />
        <Card name={name} image={'/file/15.jpg'} />
        <Card name={name} image={'/file/16.jpg'} />
        <Card name={name} image={'/file/17.jpg'} />
        <Card name={name} image={'/file/18.jpg'} />
        <Card name={name} image={'/file/19.jpg'} />

    </React.Fragment>
  );
}