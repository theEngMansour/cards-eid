import React from 'react';
import Image from 'next/image'
import { Advantage } from 'components';
import Link from 'next/link'
export default function Index() {
  return (
    <div className="bg-gray-100">
        <div  className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white pt-16">
            <div className="overflow-hidden bg-white">
                <div className="p-6 bg-white border-gray-200 sm:px-20">
                    <div className='flex justify-center'>
                        <Image src={'/logoanimated.svg'} width={'290px'} height={'190px'} alt='logo'/>
                    </div>
                    <div className="mt-8 text-2xl"> 
                        <h1 className="focus:outline-none text-4xl lg:text-4xl font-extrabold  leading-10 text-[#00c37d] lg:w-5/12 md:w-9/12">مرحباً بك  🚀🔥</h1>
                    </div>
                    <div className="mt-6 text-gray-500"> يهنئ المسلمون بعضهم البعض بعيد الفطر المبارك بإرسال الرسائل والتهنئة لبعضهم البعض ، لأن التحية وتلقي التهاني بقدوم عيد الفطر من الأمور التي تلهم الروح الشعور بالحب وقوة الروح. الترابط بين المسلمين وبعضهم البعض والشعور بالفرح المشترك لجميع المسلمين في مختلف أنحاء الأرض.
                    </div>
                    <Link href={'/'}>
                      <button style={{ backgroundColor: '#00c37d'}} className="px-12 text-white select-none rounded-xl mt-6 py-2 outline-none focus:outline-none hover:bg-green-400">إنشى بطاقتك الآن</button>
                    </Link>
                </div>
            </div>
        </div>
        <Advantage />
        <footer className="p-4 bg-white sm:p-6 mt-6">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <div><Image src="/logo-bemedia.svg" width={100} height={100} alt="bemedia"/></div>
                    <span className="self-center text-xl font-semibold whitespace-nowrap font-mono text-[#00c37d]">BeeMedia</span>
                    <p className="text-sm text-gray-500 sm:text-center font-mono">© 2022 BeeMedia All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </div>
  );
}