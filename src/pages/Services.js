import Header from './Header';
import Footer from './Footer';

import services from './img/service1.jpg';

import sv_blueprint from './img/sv_blueprint.jpg';

function Services(){
    return (
        <div className="overflow-hidden">
            <Header/>
            <div className="w-full h-96 relative">
                <img className="w-full h-96 object-cover absolute" src={services} />
                <div className="w-full h-96 bg-black bg-opacity-60 absolute" />
                <div className="w-full flex justify-center mt-32 absolute text-white text-4xl lg:text-6xl">OUR SERVICES</div>
            </div>
            <div className="w-[98%] ml-[1%] mt-[1%] mb-[1%] relative">
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <img className="h-full w-full" src={sv_blueprint}></img>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Drafting Blueprint </div>
                        <div className="flex justify-center text-black text-2xl "> Turn your vision into reality with our precise drafting blueprint services, combining creativity and technical expertise to bring your ideas to life </div>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Drafting Blueprint </div>
                        <div className="flex justify-center text-black text-2xl "> Turn your vision into reality with our precise drafting blueprint services, combining creativity and technical expertise to bring your ideas to life </div>
                    </div>
                    <div className="">
                        <img className="h-full w-full" src={sv_blueprint}></img>
                    </div>
                    <div className="">
                        <img className="h-full w-full" src={sv_blueprint}></img>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Drafting Blueprint </div>
                        <div className="flex justify-center text-black text-2xl "> Turn your vision into reality with our precise drafting blueprint services, combining creativity and technical expertise to bring your ideas to life </div>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Drafting Blueprint </div>
                        <div className="flex justify-center text-black text-2xl "> Turn your vision into reality with our precise drafting blueprint services, combining creativity and technical expertise to bring your ideas to life </div>
                    </div>
                    <div className="">
                        <img className="h-full w-full" src={sv_blueprint}></img>
                    </div>
                    <div className="">
                        <img className="h-full w-full" src={sv_blueprint}></img>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Drafting Blueprint </div>
                        <div className="flex justify-center text-black text-2xl "> Turn your vision into reality with our precise drafting blueprint services, combining creativity and technical expertise to bring your ideas to life </div>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Drafting Blueprint </div>
                        <div className="flex justify-center text-black text-2xl "> Turn your vision into reality with our precise drafting blueprint services, combining creativity and technical expertise to bring your ideas to life </div>
                    </div>
                    <div className="">
                        <img className="h-full w-full" src={sv_blueprint}></img>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Services