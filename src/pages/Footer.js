import logoFooter from './img/logoFooter.png';
import footerPhone from './img/footerPhone.png';
import footerEmail from './img/footerEmail.png';
import footerX from './img/footerX.png';
import footerIG from './img/footerIG.png';
import footerMeta from './img/footerMeta.png';
import footerTiktok from './img/footerTiktok.png';

import logoWhite from './img/logoWhite.png';

function Footer(){
    return (
        <div className="bg-neutral-800 w-full">
            <div className="flex justify-between">
                <div className="flex">
                    <div>
                        <div className="flex items-center py-4 px-2"> 
                            <img src={logoWhite} alt="logo" className="h-12 w-12 mr-2 ml-2"></img>
                            <span className="text-white text-3xl">LIFT</span>
                        </div>
                    </div>
                    <div className="py-4">
                        <a className="block px-4 text-white text-xs py-1">HOME</a>
                        <a className="block px-4 text-white text-xs py-1">ABOUT</a>
                        <a className="block px-4 text-white text-xs py-1">SERVICES</a>
                        <a className="block px-4 text-white text-xs py-1">PROJECTS</a>
                    </div>
                </div>
                <div className="grid-cols-1">
                    <div className="flex py-3">
                        <div className="w-12 h-12 bg-zinc-700 rounded-[10px] mx-4">
                            <img className="w-6 h-8 mt-2 ml-3" src={footerPhone} />
                        </div>
                        <div className="text-white text-xs">PHONE<br/><br/>+1 0123456789</div>
                    </div>
                    <div className="flex pb-3">
                        <div className="w-12 h-12 bg-zinc-700 rounded-[10px] mx-4">
                            <img className="w-12 h-12" src={footerEmail} /> 
                        </div>
                        <div className="text-white text-xs">EMAIL<br/><br/>SUPPORT@LIFTMAIL.COM</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-12 h-12 bg-zinc-700 rounded-[10px] mx-2">
                        <img className="w-8 h-8 my-2 mx-auto" src={footerX} />
                    </div>
                    <div className="w-12 h-12 bg-zinc-700 rounded-[10px] mx-2">
                        <img className="w-8 h-8 my-2 mx-auto" src={footerIG} />
                    </div>
                    <div className="w-12 h-12 bg-zinc-700 rounded-[10px] mx-2">
                        <img className="w-9 h-6 my-3 mx-auto" src={footerMeta} />
                    </div>
                    <div className="w-12 h-12 bg-zinc-700 rounded-[10px] mx-2">
                        <img className="w-8 h-8 my-2 mx-auto" src={footerTiktok} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-24 pb-2">
                <div className=" text-white">COPYRIGHT 2023 - ALL RIGHT RESERVED</div>
            </div>
        </div>



        // <div className="w-screen h-[493px] relative">
        //     <div className="w-[1440px] h-[493px] left-0 top-0 absolute bg-neutral-800" />
        //     <div className="w-[191px] h-[74px] left-[65px] top-[56px] absolute">
        //     <img className="w-[74px] h-[74px] left-0 top-0 absolute" src={logoFooter} />
        //     <div className="left-[90px] top-[26px] absolute text-white text-5xl font-normal">LIFT</div>
        //     </div>
        //     <div className="left-[334px] top-[207px] absolute text-white text-base font-normal">CONTACT</div>
        //     <div className="left-[336px] top-[175px] absolute text-white text-base font-normal">PROJECT</div>
        //     <div className="left-[336px] top-[144px] absolute text-white text-base font-normal">SERVICES</div>
        //     <div className="left-[334px] top-[112px] absolute text-white text-base font-normal">ABOUT</div>
        //     <div className="left-[580px] top-[450px] absolute text-white text-base font-normal">COPYRIGHT 2023 - ALL RIGHT RESERVED</div>
        //     <div className="left-[336px] top-[82px] absolute text-white text-base font-normal">HOME </div>
        //     <div className="w-[405px] h-[69px] left-[620px] top-[171px] absolute">
        //     <div className="w-[67px] h-[67px] left-0 top-[2px] absolute bg-zinc-700 rounded-[10px]" />
        //     <div className="w-[323px] h-10 left-[82px] top-[12px] absolute text-white text-base font-normal">EMAIL<br/><br/>SUPPORT@LIFTMAIL.COM</div>
        //     <div className="w-[69px] h-[69px] left-0 top-0 absolute">
        //         <img className="w-[69px] h-[69px] left-0 top-0 absolute" src={footerEmail} />
        //     </div>
        //     </div>
        //     <div className="w-[406px] h-[67px] left-[619px] top-[66px] absolute">
        //     <div className="w-[67px] h-[67px] left-0 top-0 absolute bg-zinc-700 rounded-[10px]" />
        //     <div className="w-[323px] h-10 left-[83px] top-[15px] absolute text-white text-base font-normal">PHONE<br/><br/>+1 0123456789</div>
        //     <div className="w-[29.60px] h-10 left-[19px] top-[14px] absolute">
        //         <img className="w-[29.60px] h-10 left-0 top-0 absolute" src={footerPhone} />
        //     </div>
        //     </div>
        //     <div className="w-[67px] h-[67px] left-[1317px] top-[64px] absolute">
        //     <div className="w-[67px] h-[67px] left-0 top-0 absolute bg-zinc-700 rounded-[10px]" />
        //     <img className="w-12 h-12 left-[10px] top-[12px] absolute" src={footerX} />
        //     </div>
        //     <div className="w-[67px] h-[67px] left-[1230px] top-[64px] absolute">
        //     <div className="w-[67px] h-[67px] left-0 top-0 absolute bg-zinc-700 rounded-[10px]" />
        //     <img className="w-[47px] h-[31px] left-[10px] top-[21px] absolute" src={footerIG} />
        //     </div>
        //     <div className="w-[67px] h-[67px] left-[1141px] top-[64px] absolute">
        //     <div className="w-[67px] h-[67px] left-0 top-0 absolute bg-zinc-700 rounded-[10px]" />
        //     <img className="w-[43px] h-[43px] left-[12px] top-[12px] absolute" src={footerMeta} />
        //     </div>
        //     <div className="w-[67px] h-[67px] left-[1054px] top-[64px] absolute">
        //     <div className="w-[67px] h-[67px] left-0 top-0 absolute bg-zinc-700 rounded-[10px]" />
        //     <div className="w-[41.67px] h-[36.81px] left-[12.18px] top-[15.23px] absolute">
        //         <img className="w-[41.67px] h-[36.81px] left-0 top-0 absolute" src={footerTiktok} />
        //     </div>
        //     </div>
        // </div>
    )
}

export default Footer