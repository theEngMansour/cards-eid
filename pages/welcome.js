import React from 'react';
import Image from 'next/image'
import { Advantage } from 'components';

export default function Index() {
  return (
    <div className="bg-gray-100">
        <div  className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white pt-16">
            <div className="overflow-hidden bg-white">
                <div className="p-6 bg-white border-gray-200 sm:px-20">
                    <div>
                        {/* Image */}
                    </div>
                    <div className="mt-8 text-2xl"> 
                        <h1 tabindex="0" className="focus:outline-none text-4xl lg:text-4xl font-extrabold  leading-10 text-orange-800 lg:w-5/12 md:w-9/12">مرحباً بك  🚀🔥</h1>
                    </div>
                    <div className="mt-6 text-gray-500"> يهنئ المسلمون بعضهم البعض بعيد الفطر المبارك بإرسال الرسائل والتهنئة لبعضهم البعض ، لأن التحية وتلقي التهاني بقدوم عيد الفطر من الأمور التي تلهم الروح الشعور بالحب وقوة الروح. الترابط بين المسلمين وبعضهم البعض والشعور بالفرح المشترك لجميع المسلمين في مختلف أنحاء الأرض.
                    </div>
                </div>
            </div>
        </div>
        <Advantage />
    </div>
  );
}