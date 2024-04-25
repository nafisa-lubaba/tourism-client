
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';


import 'swiper/css/autoplay'; 

const Slider = () => {
    return (
        <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        cssMode={true}
    >
        <SwiperSlide className="relative">
            <div>
                <img className="w-full rounded-lg" src="https://i.ibb.co/sqFkhD2/tour-3.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Welcome to PropHaven </h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold">Where your dream home finds its perfect sanctuary amidst a sea of real estate possibilities.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full rounded-lg" src="https://i.ibb.co/qnW73CG/tour-6.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Welcome to PropHaven </h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold">Where your dream home finds its perfect sanctuary amidst a sea of real estate possibilities.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full rounded-lg" src="https://i.ibb.co/zQhTdh3/banner-1.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Welcome to PropHaven </h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold"> Where your dream home finds its perfect sanctuary amidst a sea of real estate possibilities.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full rounded-lg" src="https://i.ibb.co/0YwbJDX/banner-2.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Welcome to PropHaven </h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold"> Where your dream home finds its perfect sanctuary amidst a sea of real estate possibilities.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full rounded-lg" src="https://i.ibb.co/w6vJ6yY/banner-3-1.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Welcome to PropHaven </h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl text-white font-bold"> Where your dream home finds its perfect sanctuary amidst a sea of real estate possibilities.</p>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    );
};

export default Slider;
