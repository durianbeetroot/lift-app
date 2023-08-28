import Header from './Header';
import Footer from './Footer';

function About(){
    return (
        <div className="w-[1440px] h-[2548px] bg-white flex-col justify-center items-start inline-flex">
            <Header />
            <div className="w-[1440px] h-[487px] relative">
                <img className="w-[1440px] h-[487px] left-0 top-0 absolute" src="https://via.placeholder.com/1440x487" />
                <div className="w-[1440px] h-[487px] left-0 top-0 absolute bg-black bg-opacity-60" />
                <div className="left-[585px] top-[196px] absolute text-white text-[64px] font-normal">ABOUT US</div>
                <div className="w-[234px] h-[68px] left-[632px] top-[352px] absolute bg-zinc-600 bg-opacity-0 border border-white" />
                <div className="left-[664px] top-[370px] absolute text-white text-[32px] font-normal">SEE MORE</div>
            </div>
            <div className="w-[1440px] h-[479px] relative">
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
            </div>
            <Footer/>
        </div>
    )
}

export default About