import Header from './Header';
import Footer from './Footer';

import services from './img/service1.jpg';

import sv_blueprint from './img/sv_blueprint.jpg';
import sv_materials from './img/sv_materials.jpg';
import sv_projects from './img/sv_projects.jpg';
import sv_workers from './img/sv_workers.jpg';
import sv_safety from './img/sv_safety.jpg';
import sv_qc from './img/sv_qc.jpg';

function Services(){
    return (
        <div className="overflow-hidden">
            <Header selected="services"/>
            <div className="w-full h-96 relative">
                <img className="w-full h-96 object-cover absolute" src={services} />
                <div className="w-full h-96 bg-black bg-opacity-60 absolute" />
                <div className="w-full flex justify-center mt-32 absolute text-white text-4xl lg:text-6xl">OUR SERVICES</div>
            </div>
            <div className="w-[98%] ml-[1%] mt-[1%] mb-[1%] relative">
                <div className="hidden lg:grid grid-cols-2 gap-4">
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_blueprint}></img>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Drafting Blueprint </div>
                        <div className="flex justify-center text-black text-2xl italic"> Turn your vision into reality with our precise drafting blueprint services, combining creativity and technical expertise to bring your ideas to life </div>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Provide Materials </div>
                        <div className="flex justify-center text-black text-2xl italic"> Discover our comprehensive range of materials services designed to cater to all your project needs </div>
                    </div>
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_materials}></img>
                    </div>
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_projects}></img>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Manage Projects </div>
                        <div className="flex justify-center text-black text-2xl italic"> Simplify project management and streamline success allowing you to navigate every aspect of your ventures </div>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Manage Workers </div>
                        <div className="flex justify-center text-black text-2xl italic"> Easily optimize workforce efficiency and productivity empowering you to effortlessly manage workers </div>
                    </div>
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_workers}></img>
                    </div>
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_safety}></img>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Oversee Safety </div>
                        <div className="flex justify-center text-black text-2xl italic"> Enabling you to effectively oversee safety protocols and ensure the well-being of all individuals </div>
                    </div>
                    <div className="mt-36">
                        <div className="flex justify-center text-black text-6xl"> Oversee Quality Control </div>
                        <div className="flex justify-center text-black text-2xl italic"> Elevate your standards with our meticulous quality control solutionsenhance the excellence of your products </div>
                    </div>
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_qc}></img>
                    </div>
                </div>
                <div className="lg:hidden md:grid grid-cols-1 gap-4">
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_blueprint}></img>
                    </div>
                    <div className="my-10">
                        <div className="flex justify-center text-black text-6xl"> Drafting Blueprint </div>
                        <div className="flex justify-center text-black text-2xl italic"> Turn your vision into reality with our precise drafting blueprint services, combining creativity and technical expertise to bring your ideas to life </div>
                    </div>
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_materials}></img>
                    </div>
                    <div className="my-10">
                        <div className="flex justify-center text-black text-6xl"> Provide Materials </div>
                        <div className="flex justify-center text-black text-2xl italic"> Discover our comprehensive range of materials services designed to cater to all your project needs </div>
                    </div>
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_projects}></img>
                    </div>
                    <div className="my-10">
                        <div className="flex justify-center text-black text-6xl"> Manage Projects </div>
                        <div className="flex justify-center text-black text-2xl italic"> Simplify project management and streamline success allowing you to navigate every aspect of your ventures </div>
                    </div>
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_workers}></img>
                    </div>
                    <div className="my-10">
                        <div className="flex justify-center text-black text-6xl"> Manage Workers </div>
                        <div className="flex justify-center text-black text-2xl italic"> Easily optimize workforce efficiency and productivity empowering you to effortlessly manage workers </div>
                    </div>
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_safety}></img>
                    </div>
                    <div className="my-10">
                        <div className="flex justify-center text-black text-6xl"> Oversee Safety </div>
                        <div className="flex justify-center text-black text-2xl italic"> Enabling you to effectively oversee safety protocols and ensure the well-being of all individuals </div>
                    </div>
                    <div className="">
                        <img className="h-96 w-full object-cover" src={sv_qc}></img>
                    </div>
                    <div className="my-10">
                        <div className="flex justify-center text-black text-6xl"> Oversee Quality Control </div>
                        <div className="flex justify-center text-black text-2xl italic"> Elevate your standards with our meticulous quality control solutionsenhance the excellence of your products </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Services