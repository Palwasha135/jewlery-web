import Carousel from "react-bootstrap/Carousel";
import Img1 from "../Assets/slideimg.jpg";
import Img2 from "../Assets/slideimg2.jpg";
import Img3 from "../Assets/slideimg3.jpg";
function Firstslider() {
  return (
    <div className="">
      <Carousel >
        <Carousel.Item interval={1000} >
          <img alt="pic"
            style={{ height: "50vh", maxHeight: "75vh" }}
            className=" w-full relative "
            src={Img1}
          />
          <div  className=" absolute inset-20 w-36 md:w-2/4">
            <h3 className="text-[#cb8161] font-CormorantGaramond md:text-6xl top-0">STATEMENT MAKERS</h3>
            <p className="text-[#cb8161] text-sm md:text-lg" >Set of a chain reaction with statment styles that boast large profiles and embellished details</p>
         <button className="bg-white  px-3 md:py-2  text-sm ">SHOP NOW</button>
          </div> 
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img alt="pic"
            style={{ height: "50vh", maxHeight: "75vh" }}
            className=" w-full"
            src={Img2}
          />
          <div  className=" absolute inset-20 w-36 md:w-2/4">
            <h3 className="text-[#cb8161] font-CormorantGaramond md:text-6xl top-0">OH, HELLO SPRING</h3>
           
           <p className="text-[#cb8161] text-sm md:text-lg" >Set of a chain reaction with statment styles that boast large profiles and embellished details</p>
           <button className="bg-white  px-3 md:py-2 text-sm ">SHOP NOW</button>
        </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img alt="pic"
            style={{ height: "50vh", maxHeight: "75vh" }}
            className="h-2/4 w-full"
            src={Img3}
          />
          <div  className=" absolute inset-20 w-36 md:w-2/4">
            <h3 className="text-[#cb8161] font-CormorantGaramond md:text-6xl  font-bold top-0 md:pl-9">BEST OF THE BEST</h3>
            <p className="text-[#cb8161] text-sm md:text-lg md:pl-9" >Set of a chain reaction with statment styles that boast large profiles and embellished details</p>
            <button className="bg-white  px-3 md:py-2 text-sm  md:ml-9">SHOP NOW</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Firstslider;
