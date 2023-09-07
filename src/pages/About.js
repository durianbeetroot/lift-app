import Header from './Header';
import Footer from './Footer';

import about1 from './img/about1.jpg';
import about2 from './img/about2.jpg';
import about3 from './img/about3.jpg';
import about4 from './img/about4.jpg';

function About(){
    return (
        <div className="overflow-hidden">
            <Header />
            <div className="w-full h-96 relative">
                <img className="w-full h-96 object-cover absolute" src={about1} />
                <div className="w-full h-96 bg-black bg-opacity-60 absolute" />
                <div className="w-full flex justify-center mt-32 absolute text-white mx-6 text-4xl lg:text-6xl">ABOUT US</div>
            </div>
            <div className="w-full h-96 relative">
                <img className="w-full h-96 object-cover absolute" src={about2} />
                <div className="w-full h-96 bg-white bg-opacity-80 absolute" />
                <div className="w-full flex justify-center text-center mt-32 absolute text-black text-xl">At LIFT, we are a dedicated and experienced team of construction professionals committed to turning your vision into reality. With a passion for excellence and a proven track record of delivering exceptional projects, we bring expertise, innovation, and a customer-centric approach to every endeavor</div>
            </div>
            <div className="w-full h-96 relative">
                <img className="w-full h-96 object-cover absolute" src={about3} />
                <div className="w-full h-96 bg-black bg-opacity-80 absolute" />
                <div className="w-full flex justify-center mt-32 absolute text-white text-xl">Steeped in a rich legacy spanning half a decades, our construction company has been a cornerstone of the industry's evolution. From humble beginnings to becoming a trusted name, we continue to build on our heritage of quality, innovation, and enduring craftsmanship</div>
            </div>
            <div className="w-full h-96 relative">
                <img className="w-full h-96 object-cover absolute" src={about4} />
                <div className="w-full h-96 bg-white bg-opacity-80 absolute" />
                <div className="w-full flex justify-center mt-32 absolute text-black text-xl">Our vision is to reshape skylines and communities through transformative construction. We strive to be the catalyst for innovative design, sustainable practices, and unparalleled craftsmanship, setting new industry benchmarks.</div>
            </div>
            {/* <div className="w-[1440px] h-[479px] relative">
                <div className="w-[1440px] h-[479px] left-0 top-0 absolute bg-white" />
                <div className="w-[1119px] left-[181px] top-[130px] absolute text-center text-black text-[40px] font-normal">At LIFT, we are a dedicated and experienced team of construction professionals committed to turning your vision into reality. With a passion for excellence and a proven track record of delivering exceptional projects, we bring expertise, innovation, and a customer-centric approach to every endeavor</div>
            </div>
            <div className="w-[1440px] h-[487px] relative">
                <img className="w-[1440px] h-[487px] left-0 top-0 absolute" src="https://via.placeholder.com/1440x487" />
                <div className="w-[1440px] h-[487px] left-0 top-0 absolute bg-black bg-opacity-80" />
                <div className="w-[1119px] left-[185px] top-[154px] absolute text-center text-white text-[40px] font-normal">Steeped in a rich legacy spanning half a decades, our construction company has been a cornerstone of the industry's evolution. From humble beginnings to becoming a trusted name, we continue to build on our heritage of quality, innovation, and enduring craftsmanship</div>
            </div>
            <div className="w-[1440px] h-[487px] relative">
                <img className="w-[1440px] h-[487px] left-0 top-0 absolute" src="https://via.placeholder.com/1440x487" />
                <div className="w-[1440px] h-[487px] left-0 top-0 absolute bg-white bg-opacity-80" />
                <div className="w-[1119px] left-[185px] top-[174px] absolute text-center text-black text-[40px] font-normal">Our vision is to reshape skylines and communities through transformative construction. We strive to be the catalyst for innovative design, sustainable practices, and unparalleled craftsmanship, setting new industry benchmarks.</div>
            </div> */}
            <Footer/>
        </div>
    )
}

export default About