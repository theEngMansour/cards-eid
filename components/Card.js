import React from 'react';
import Image from 'next/image';

export default function Card({ name }) {
  return (
    <React.Fragment>
        <div class="my-8 flex items-center justify-center">
            <card class="relative md:h-[30rem] w-[35rem] bg-white outline-[10px] outline-white outline shadow-lg">
                {/* <!-- Background Image --> */}
                <div class="object-cover w-full h-full p-2">
                    <Image src={'/snd_01.jpg'} width={600} height={500}/>
                </div>
                {/* <!-- Content --> */}
                <div class="absolute w-full h-32 bottom-0 flex flex-col items-center justify-center text-center">
                    {/* <!-- Company Logo --> */}
                    {/* <img src="https://github.githubassets.com/images/modules/site/enterprise/launchpad/logos/logo-dowjones.svg" /> */}
                    <p class="text-lg font-light px-14 text-gray-300">
                        {name}
                    </p>
                </div>
            </card>
        </div>
    </React.Fragment>
  );
}
