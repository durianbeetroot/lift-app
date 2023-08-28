function Header(){
    return(
        <div className="w-[1440px] h-[115px] relative">
                <div className="w-[1440px] h-[115px] left-0 top-0 absolute bg-neutral-800" />
                <div className="w-[191px] h-[74px] left-[28px] top-[12px] absolute">
                <img className="w-[74px] h-[74px] left-0 top-0 absolute" src="https://via.placeholder.com/74x74" />
                <div className="left-[90px] top-[26px] absolute text-amber-400 text-5xl font-normal">LIFT</div>
                </div>
                <div className="left-[449px] top-[46px] absolute text-white text-2xl font-normal">HOME</div>
                <div className="left-[1021px] top-[46px] absolute text-amber-400 text-2xl font-normal">ABOUT</div>
                <div className="left-[626px] top-[46px] absolute text-amber-400 text-2xl font-normal">SERVICES</div>
                <div className="left-[835px] top-[46px] absolute text-amber-400 text-2xl font-normal">PROJECT</div>
                <div className="w-[78px] h-1 left-[449px] top-[70px] absolute bg-amber-400" />
            </div>
    )
}

export default Header