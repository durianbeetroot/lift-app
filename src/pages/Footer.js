import logoFooter from './img/logoFooter.png';
import footerPhone from './img/footerPhone.png';
import footerEmail from './img/footerEmail.png';
import footerX from './img/footerX.png';
import footerIG from './img/footerIG.png';
import footerMeta from './img/footerMeta.png';
import footerTiktok from './img/footerTiktok.png';

function Footer(){
    return (
        <div className="w-screen h-[493px] relative">
            <div className="w-[1440px] h-[493px] left-0 top-0 absolute bg-neutral-800" />
            <div className="w-[191px] h-[74px] left-[65px] top-[56px] absolute">
            <img className="w-[74px] h-[74px] left-0 top-0 absolute" src={logoFooter} />
            <div className="left-[90px] top-[26px] absolute text-white text-5xl font-normal">LIFT</div>
            </div>
            <div className="left-[334px] top-[207px] absolute text-white text-base font-normal">CONTACT</div>
            <div className="left-[336px] top-[175px] absolute text-white text-base font-normal">PROJECT</div>
            <div className="left-[336px] top-[144px] absolute text-white text-base font-normal">SERVICES</div>
            <div className="left-[334px] top-[112px] absolute text-white text-base font-normal">ABOUT</div>
            <div className="left-[580px] top-[450px] absolute text-white text-base font-normal">COPYRIGHT 2023 - ALL RIGHT RESERVED</div>
            <div className="left-[336px] top-[82px] absolute text-white text-base font-normal">HOME </div>
            <div className="w-[405px] h-[69px] left-[620px] top-[171px] absolute">
            <div className="w-[67px] h-[67px] left-0 top-[2px] absolute bg-zinc-700 rounded-[10px]" />
            <div className="w-[323px] h-10 left-[82px] top-[12px] absolute text-white text-base font-normal">EMAIL<br/><br/>SUPPORT@LIFTMAIL.COM</div>
            <div className="w-[69px] h-[69px] left-0 top-0 absolute">
                <img className="w-[69px] h-[69px] left-0 top-0 absolute" src={footerEmail} />
            </div>
            </div>
            <div className="w-[406px] h-[67px] left-[619px] top-[66px] absolute">
            <div className="w-[67px] h-[67px] left-0 top-0 absolute bg-zinc-700 rounded-[10px]" />
            <div className="w-[323px] h-10 left-[83px] top-[15px] absolute text-white text-base font-normal">PHONE<br/><br/>+1 0123456789</div>
            <div className="w-[29.60px] h-10 left-[19px] top-[14px] absolute">
                <img className="w-[29.60px] h-10 left-0 top-0 absolute" src={footerPhone} />
            </div>
            </div>
            <div className="w-[67px] h-[67px] left-[1317px] top-[64px] absolute">
            <div className="w-[67px] h-[67px] left-0 top-0 absolute bg-zinc-700 rounded-[10px]" />
            <img className="w-12 h-12 left-[10px] top-[12px] absolute" src={footerX} />
            </div>
            <div className="w-[67px] h-[67px] left-[1230px] top-[64px] absolute">
            <div className="w-[67px] h-[67px] left-0 top-0 absolute bg-zinc-700 rounded-[10px]" />
            <img className="w-[47px] h-[31px] left-[10px] top-[21px] absolute" src={footerIG} />
            </div>
            <div className="w-[67px] h-[67px] left-[1141px] top-[64px] absolute">
            <div className="w-[67px] h-[67px] left-0 top-0 absolute bg-zinc-700 rounded-[10px]" />
            <img className="w-[43px] h-[43px] left-[12px] top-[12px] absolute" src={footerMeta} />
            </div>
            <div className="w-[67px] h-[67px] left-[1054px] top-[64px] absolute">
            <div className="w-[67px] h-[67px] left-0 top-0 absolute bg-zinc-700 rounded-[10px]" />
            <div className="w-[41.67px] h-[36.81px] left-[12.18px] top-[15.23px] absolute">
                <img className="w-[41.67px] h-[36.81px] left-0 top-0 absolute" src={footerTiktok} />
            </div>
            </div>
        </div>
    )
}

export default Footer