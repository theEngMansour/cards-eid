import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Image from 'next/image'
export default function Advantage() {
  return (
    <div className="bg-gray-100">
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white pt-16">
            <div className="flex items-center flex-col px-4">
                <h1  className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-[#00c37d] lg:w-5/12 md:w-9/12 pt-4">مميزات الموقع</h1>
                <p  className="focus:outline-none text-sm text-center mt-3 text-[#00c37d] leading-4 font-mono">mansour_tech@</p>
            </div>
            <div className="focus:outline-none mt-20 flex flex-wrap justify-start gap-10 px-4">
                <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-[#00c37c9d] rounded w-16 h-16 mt-2 mr-1"></div>
                        <div className="absolute text-white bottom-0 left-0 bg-[#00c37d] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                            <Image src="/hand-holding-heart.svg" width={200} height={100} alt="eid"/>
                        </div>
                    </div>
                    <div className="w-10/12 mr-10">
                        <h2  className="focus:outline-none text-lg font-bold leading-tight text-[#00c37d]">سريع</h2>
                        <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">موقع يقدم خدمة سريعة</p>
                    </div>
                </div>
                <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-[#00c37c9d] rounded w-16 h-16 mt-2 mr-1"></div>
                        <div className="absolute text-white bottom-0 left-0 bg-[#00c37d] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                            <Image src="/paper-plane.svg" width={200} height={100} alt="eid"/>
                        </div>
                    </div>
                    <div className="w-10/12 mr-10">
                        <h2  className="focus:outline-none text-lg font-semibold leading-tight text-[#00c37d]">بدون إعلانات</h2>
                        <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">موقع لايحتوي على إي إعلانات مزعجة</p>
                    </div>
                </div>
                <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-[#00c37c9d] rounded w-16 h-16 mt-2 mr-1"></div>
                        <div className="absolute text-white bottom-0 left-0 bg-[#00c37d] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                            <Image src="/picture.svg" width={200} height={100} alt="eid"/>
                        </div>
                    </div>
                    <div className="w-10/12 mr-10">
                        <h2  className="focus:outline-none text-lg font-semibold leading-tight text-[#00c37d]">صور عالية الدقة</h2>
                        <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">جميع الصور الذي في الموقع ذا دقة عالية</p>
                    </div>
                </div>
                <div className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-[#00c37c9d] rounded w-16 h-16 mt-2 mr-1"></div>
                        <div className="absolute text-white bottom-0 left-0 bg-[#00c37d] rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                            <Image src="/heart.svg" width={200} height={100} alt="eid"/>
                        </div>
                    </div>
                    <div className="w-10/12 mr-10">
                        <h2  className="focus:outline-none text-lg font-semibold leading-tight text-[#00c37d]">ريل تايم</h2>
                        <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">يتم توليد البطائق في الوقت الفعلي بدون اي تأخير</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}