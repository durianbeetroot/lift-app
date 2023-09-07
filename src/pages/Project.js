import Header from './Header';
import Footer from './Footer';

import projects from './img/projects.jpg';

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';

function Project(){
    return (
        <div className="overflow-hidden">
            <Header/>
            <div className="w-full h-96 relative">
                <img className="w-full h-96 object-cover absolute" src={projects} />
                <div className="w-full h-96 bg-black bg-opacity-60 absolute" />
                <div className="w-full flex justify-center mt-32 absolute text-white text-4xl lg:text-6xl">OUR PROJECTS</div>
            </div>
            <div className="w-[98%] ml-[1%] mt-[1%] mb-[1%] relative">
                <div className="md:grid grid-cols-2 gap-4">
                    <div>
                        <div className="absolute flex justify-center mt-[33%] ml-6 text-white text-3xl"> Duplex Apartment Goodway Street </div>
                        <img className="h-full w-full" src={img1}></img>
                    </div>
                    <div>
                        <div className="absolute flex justify-center mt-[33%] ml-6 text-white text-3xl"> Modern House Betterway Street </div>
                        <img className="h-full w-full" src={img2}></img>
                    </div>
                    <div>
                        <div className="absolute flex justify-center mt-[30%] ml-6 text-white text-3xl"> Single House Sideway Suburb </div>
                        <img className="h-full w-full" src={img3}></img>
                    </div>
                    <div>
                        <div className="absolute flex justify-center mt-[30%] ml-6 text-white text-3xl"> Beach House Dockerway Street </div>
                        <img className="h-full w-full" src={img4}></img>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Project