import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import SixKIcon from '@mui/icons-material/SixK';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
export default function Advantage() {
  return (
    <div classNameName="bg-gray-100">
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white pt-16">
            <div role="contentinfo" className="flex items-center flex-col px-4">
                <h1 tabindex="0" className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-orange-800 lg:w-5/12 md:w-9/12 pt-4">مميزات الموقع</h1>
                <p tabindex="0" className="focus:outline-none text-sm text-center mt-3 text-gray-600 leading-4 font-mono">mansour_tech@</p>
            </div>
            <div tabindex="0" aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-start gap-10 px-4">
                <div tabindex="0" aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-orange-200 rounded w-16 h-16 mt-2 mr-1"></div>
                        <div className="absolute text-white bottom-0 left-0 bg-orange-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                            <VolunteerActivismIcon sx={{ fontSize: '30px'}}/>
                        </div>
                    </div>
                    <div className="w-10/12 mr-10">
                        <h2 tabindex="0" className="focus:outline-none text-lg font-bold leading-tight text-orange-800">سريع</h2>
                        <p tabindex="0" className="focus:outline-none text-base text-gray-600 leading-normal pt-2">موقع يقدم خدمة سريعة</p>
                    </div>
                </div>
                <div tabindex="0" aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-orange-200 rounded w-16 h-16 mt-2 mr-1"></div>
                        <div className="absolute text-white bottom-0 left-0 bg-orange-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <SmokeFreeIcon sx={{ fontSize: '30px'}}/>
                        </div>
                    </div>
                    <div className="w-10/12 mr-10">
                        <h2 tabindex="0" className="focus:outline-none text-lg font-semibold leading-tight text-orange-800">بدون إعلانات</h2>
                        <p tabindex="0" className="focus:outline-none text-base text-gray-600 leading-normal pt-2">موقع لايحتوي على إي إعلانات مزعجة</p>
                    </div>
                </div>
                <div tabindex="0" aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-orange-200 rounded w-16 h-16 mt-2 mr-1"></div>
                        <div className="absolute text-white bottom-0 left-0 bg-orange-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                           <TipsAndUpdatesIcon sx={{ fontSize: '30px'}}/>
                        </div>
                    </div>
                    <div className="w-10/12 mr-10">
                        <h2 tabindex="0" className="focus:outline-none text-lg font-semibold leading-tight text-orange-800">صور عالية الدقة</h2>
                        <p tabindex="0" className="focus:outline-none text-base text-gray-600 leading-normal pt-2">جميع الصور الذي في الموقع ذا دقة عالية</p>
                    </div>
                </div>
                <div tabindex="0" aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                    <div className="w-20 h-20 relative mr-5">
                        <div className="absolute top-0 right-0 bg-orange-200 rounded w-16 h-16 mt-2 mr-1"></div>
                        <div className="absolute text-white bottom-0 left-0 bg-orange-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                           <WhatshotIcon sx={{ fontSize: '30px'}}/>
                        </div>
                    </div>
                    <div className="w-10/12 mr-10">
                        <h2 tabindex="0" className="focus:outline-none text-lg font-semibold leading-tight text-orange-800">ريل تايم</h2>
                        <p tabindex="0" className="focus:outline-none text-base text-gray-600 leading-normal pt-2">يتم توليد البطائق في الوقت الفعلي بدون اي تأخير</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}