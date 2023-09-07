import Header from './Header';
import Footer from './Footer';

function Services(){
    return (
        <div>
            <Header/>
            <div className="w-full h-96 relative">
                <div className="w-full h-96 bg-black bg-opacity-60 absolute" />
                <div className="w-full flex justify-center mt-32 absolute text-white mx-6 text-4xl lg:text-6xl">ABOUT US</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Services