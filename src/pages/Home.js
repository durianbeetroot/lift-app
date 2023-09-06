import Header from './Header';
import Footer from './Footer';

import pic1 from './img/home1.jpg';

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';

import React, { useState, useEffect } from 'react';

function Home(){

    const imgList = [img1,img2,img3,img4]
    const nameList = ['Duplex Apartment Goodway Street','Modern House Betterway Street','Single House Sideway Suburb','Beach House Dockerway Street']

    const [imgSrc,setImgSrc] = useState(imgList[0]);
    const [nameSrc,setNameSrc] = useState(nameList[0]);
    const [count, setCount] = useState(0);

    const updateShow = () => {
        setCount(count==3 ? 0 : count+1)
        setImgSrc(imgList[count])
        setNameSrc(nameList[count])
    }

    return (
        <div className="">
            <Header />
            <div className="w-full h-96 relative">
                <img className="w-full h-96 object-cover absolute" src={pic1} />
                <div className="w-full h-96 bg-black bg-opacity-60 absolute" />
                <div className="w-full flex justify-center mt-32 absolute text-white mx-6 text-4xl lg:text-6xl">CONSTRUCT YOUR DREAM</div>
                <div className="w-full flex justify-center pt-64 relative">
                    <div className="w-56 h-16 absolute bg-zinc-600 bg-opacity-0 border border-white" />
                    <div className="w-56 flex justify-center mt-4 absolute text-white text-2xl hover:scale-125 duration-300">SEE MORE</div>
                </div>
            </div>
            <div className="w-full relative">
                <div className="w-full flex justify-center mt-16">
                    <div className="w-full h-24 md:h-48 relative">
                        <div className="w-full flex justify-center text-black text-3xl md:text-5xl">OUR SERVICES</div>
                        <div className="w-full flex justify-center text-black mx-6 md:text-2xl">We Provided Construction Services Based on the Request of the Client</div>
                    </div>
                </div>
                <div className="w-full sm:columns-1 md:flex md:justify-between">
                    <div className="w-96 h-40 relative flex justify-center mb-24">
                        <div className="w-40 h-40 absolute bg-amber-400 rounded-full">
                            <img className="w-24 h-24 mx-auto mt-8 relative" src="https://via.placeholder.com/104x104" />
                        </div>
                        <div className="flex justify-center text-black mt-48 text-2xl">Oversee Quality Control</div>
                    </div>
                    <div className="w-96 h-40 relative flex justify-center mb-24">
                        <div className="w-40 h-40 absolute bg-amber-400 rounded-full">
                            <img className="w-24 h-24 mx-auto mt-8 relative" src="https://via.placeholder.com/104x104" />
                        </div>
                        <div className="flex justify-center text-black mt-48 text-2xl">Oversee Quality Control</div>
                    </div>
                    <div className="w-96 h-40 relative flex justify-center mb-24">
                        <div className="w-40 h-40 absolute bg-amber-400 rounded-full">
                            <img className="w-24 h-24 mx-auto mt-8 relative" src="https://via.placeholder.com/104x104" />
                        </div>
                        <div className="flex justify-center text-black mt-48 text-2xl">Oversee Quality Control</div>
                    </div>
                </div>
                <div className="w-full sm:columns-1 md:flex md:justify-between">
                    <div className="w-96 h-40 relative flex justify-center mb-24">
                        <div className="w-40 h-40 absolute bg-amber-400 rounded-full">
                            <img className="w-24 h-24 mx-auto mt-8 relative" src="https://via.placeholder.com/104x104" />
                        </div>
                        <div className="flex justify-center text-black mt-48 text-2xl">Oversee Quality Control</div>
                    </div>
                    <div className="w-96 h-40 relative flex justify-center mb-24">
                        <div className="w-40 h-40 absolute bg-amber-400 rounded-full">
                            <img className="w-24 h-24 mx-auto mt-8 relative" src="https://via.placeholder.com/104x104" />
                        </div>
                        <div className="flex justify-center text-black mt-48 text-2xl">Oversee Quality Control</div>
                    </div>
                    <div className="w-96 h-40 relative flex justify-center mb-24">
                        <div className="w-40 h-40 absolute bg-amber-400 rounded-full">
                            <img className="w-24 h-24 mx-auto mt-8 relative" src="https://via.placeholder.com/104x104" />
                        </div>
                        <div className="flex justify-center text-black mt-48 text-2xl">Oversee Quality Control</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[36rem] relative">
                <div className="w-full absolute flex justify-center mt-8 text-white text-5xl">Our Projects</div>
                <div className="w-full h-[36rem] bg-black bg-opacity-30 absolute" />
                <button className="w-full h-[36rem] absolute" onClick={updateShow}> </button>
                <div className="w-full absolute flex justify-center mt-[32rem] text-white text-2xl mx-3">{nameSrc}</div>
                <img className="w-full h-[36rem] object-cover" src={imgSrc}/>
            </div>
            <Footer />
            {/* <div className="w-[1440px] h-[487px] relative">
                <img className="w-[1440px] h-[487px] left-0 top-0 absolute" src={pic1} />
                <div className="w-[1440px] h-[487px] left-0 top-0 absolute bg-black bg-opacity-60" />
                <div className="left-[312px] top-[196px] absolute text-white text-[64px] font-normal">CONSTRUCT YOUR DREAM</div>
                <div className="w-[234px] h-[68px] left-[610px] top-[337px] absolute bg-zinc-600 bg-opacity-0 border border-white" />
                <div className="left-[642px] top-[355px] absolute text-white text-[32px] font-normal">SEE MORE</div>
            </div>
            <div className="w-[1440px] h-[1013px] relative">
                <div className="w-[1440px] h-[1013px] left-0 top-0 absolute bg-white" />
                <div className="w-[353px] h-[234px] left-[978px] top-[682px] absolute">
                <div className="w-[170px] h-[170px] left-[92px] top-0 absolute bg-amber-400 rounded-full" />
                <img className="w-[104px] h-[104px] left-[116px] top-[33px] absolute" src="https://via.placeholder.com/104x104" />
                <div className="left-0 top-[202px] absolute text-black text-[32px] font-normal">Oversee Quality Control</div>
                </div>
                <div className="w-[221px] h-[234px] left-[614px] top-[682px] absolute">
                <div className="w-[170px] h-[170px] left-[26px] top-0 absolute bg-amber-400 rounded-full" />
                <div className="left-0 top-[202px] absolute text-black text-[32px] font-normal">Oversee Safety</div>
                <img className="w-[111px] h-[111px] left-[57px] top-[29px] absolute" src="https://via.placeholder.com/111x111" />
                </div>
                <div className="w-[247px] h-[234px] left-[163px] top-[682px] absolute">
                <div className="w-[170px] h-[170px] left-[47px] top-0 absolute bg-amber-400 rounded-full" />
                <div className="left-0 top-[202px] absolute text-black text-[32px] font-normal">Manage Workers</div>
                <img className="w-[107px] h-[107px] left-[78px] top-[29px] absolute" src="https://via.placeholder.com/107x107" />
                </div>
                <div className="w-[243px] h-[234px] left-[1018px] top-[323px] absolute">
                <div className="w-[170px] h-[170px] left-[47px] top-0 absolute bg-amber-400 rounded-full" />
                <img className="w-[97px] h-[97px] left-[83px] top-[38px] absolute" src="https://via.placeholder.com/97x97" />
                <div className="left-0 top-[202px] absolute text-black text-[32px] font-normal">Manage Projects</div>
                </div>
                <div className="w-[254px] h-[234px] left-[588px] top-[323px] absolute">
                <div className="w-[170px] h-[170px] left-[47px] top-0 absolute bg-amber-400 rounded-full" />
                <div className="left-0 top-[202px] absolute text-black text-[32px] font-normal">Provide Materials</div>
                <img className="w-[101px] h-[101px] left-[83px] top-[34px] absolute" src="https://via.placeholder.com/101x101" />
                </div>
                <div className="w-[264px] h-[234px] left-[158px] top-[323px] absolute">
                <div className="w-[170px] h-[170px] left-[47px] top-0 absolute bg-amber-400 rounded-full" />
                <img className="w-[94px] h-[94px] left-[85px] top-[38px] absolute" src="https://via.placeholder.com/94x94" />
                <div className="left-0 top-[202px] absolute text-black text-[32px] font-normal">Drafting Blueprint</div>
                </div>
                <div className="w-[767px] h-[104px] left-[336px] top-[99px] absolute">
                <div className="w-[767px] h-[30px] left-0 top-[74px] absolute text-black text-2xl font-normal">We Provided Construction Services Based on the Request of the Client</div>
                <div className="w-[368px] h-[54px] left-[222px] top-0 absolute text-black text-5xl font-normal">OUR SERVICES</div>
                </div>
            </div>
            <div className="w-[1440px] h-[614px] relative">
                <img className="w-[1440px] h-[614px] left-0 top-0 absolute" src="https://via.placeholder.com/1440x614" />
                <div className="w-[1440px] h-[614px] left-0 top-0 absolute bg-black bg-opacity-30" />
                <div className="w-[307px] h-[45.05px] left-[557px] top-[52.39px] absolute text-white text-[40px] font-normal">OUR PROJECTS</div>
                <div className="w-[650px] h-12 left-[52px] top-[556px] absolute text-white text-[40px] font-normal">Duplex Apartment Goodway Street</div>
                <img className="w-[124px] h-[56.65px] left-[1387.65px] top-[256px] absolute origin-top-left rotate-90" src="https://via.placeholder.com/124x57" />
                <img className="w-[129.92px] h-[56.65px] left-[45px] top-[383.49px] absolute origin-top-left -rotate-90" src="https://via.placeholder.com/130x57" />
            </div> */}
        </div>
    );
}

export default Home