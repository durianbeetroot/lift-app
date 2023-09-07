import Header from './Header';
import Footer from './Footer';

import projects from './img/projects.jpg';

import img1 from './img/img1.jpg';

function Project(){
    return (
        <div>
            <Header/>
            <div className="w-full h-96 relative">
                <img className="w-full h-96 object-cover absolute" src={projects} />
                <div className="w-full h-96 bg-black bg-opacity-60 absolute" />
                <div className="w-full flex justify-center mt-32 absolute text-white mx-6 text-4xl lg:text-6xl">OUR PROJECTS</div>
            </div>
            <div className="w-full relative">
                <div className="w-full flex justify-between">
                    <img className="w-2/5 h-2/5 ml-6 mt-6" src={img1}></img>
                    <img className="w-2/5 h-2/5 mr-6 mt-6" src={img1}></img>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Project