import banner1 from '../../../../assets/images/banner/1.jpg'
import banner2 from '../../../../assets/images/banner/2.jpg'
import banner3 from '../../../../assets/images/banner/5.jpg'
import banner4 from '../../../../assets/images/banner/6.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel m-8 h-[700px] max-w-8xl rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute h-full  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  left-0 top-0 bottom-0">
                        <div className='space-y-8 w-1/3 ml-10 mt-28 '>

                            <h1 className='text-6xl text-white font-bold '>
                                EXPERIENCE TOP-NOTCH CAR SERVICING TODAY.
                            </h1>
                            <p className='text-white font-semibold'>
                                Top-notch Car Servicing Available Now. Experience Expert Care For Your Vehicle Today and Keep It Running Smoothly and Efficiently.
                            </p>

                            <div className='flex items-center gap-4'>
                                <div>
                                    <button className='bg-orange-500 p-3 rounded-lg text-lg text-white font-bold'>Discover More</button>
                                </div>
                                <div>
                                    <button className=' bg-green-600 p-3 rounded-lg text-lg text-white font-bold'>Latest Project</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle bg-orange-600 font-bold text-lg text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-orange-600 font-bold text-lg text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute h-full  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  left-0 top-0 bottom-0">
                        <div className='space-y-8 w-1/3 ml-10 mt-28 '>

                            <h1 className='text-6xl text-white font-bold '>
                                EXPERIENCE TOP-NOTCH CAR SERVICING TODAY.
                            </h1>
                            <p className='text-white font-semibold'>
                                Top-notch Car Servicing Available Now. Experience Expert Care For Your Vehicle Today and Keep It Running Smoothly and Efficiently.
                            </p>

                            <div className='flex items-center gap-4'>
                                <div>
                                    <button className='bg-orange-500 p-3 rounded-lg text-lg text-white font-bold'>Discover More</button>
                                </div>
                                <div>
                                    <button className=' bg-green-600 p-3 rounded-lg text-lg text-white font-bold'>Latest Project</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle bg-orange-600 font-bold text-lg text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-orange-600 font-bold text-lg text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute h-full  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  left-0 top-0 bottom-0">
                        <div className='space-y-8 w-1/3 ml-10 mt-28 '>

                            <h1 className='text-6xl text-white font-bold '>
                                EXPERIENCE TOP-NOTCH CAR SERVICING TODAY.
                            </h1>
                            <p className='text-white font-semibold'>
                                Top-notch Car Servicing Available Now. Experience Expert Care For Your Vehicle Today and Keep It Running Smoothly and Efficiently.
                            </p>

                            <div className='flex items-center gap-4'>
                                <div>
                                    <button className='bg-orange-500 p-3 rounded-lg text-lg text-white font-bold'>Discover More</button>
                                </div>
                                <div>
                                    <button className=' bg-green-600 p-3 rounded-lg text-lg text-white font-bold'>Latest Project</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle bg-orange-600 font-bold text-lg text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-orange-600 font-bold text-lg text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="absolute h-full  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  left-0 top-0 bottom-0">
                        <div className='space-y-8 w-1/3 ml-10 mt-28 '>

                            <h1 className='text-6xl text-white font-bold '>
                                EXPERIENCE TOP-NOTCH CAR SERVICING TODAY.
                            </h1>
                            <p className='text-white font-semibold'>
                                Top-notch Car Servicing Available Now. Experience Expert Care For Your Vehicle Today and Keep It Running Smoothly and Efficiently.
                            </p>

                            <div className='flex items-center gap-4'>
                                <div>
                                    <button className='bg-orange-500 p-3 rounded-lg text-lg text-white font-bold'>Discover More</button>
                                </div>
                                <div>
                                    <button className=' bg-green-600 p-3 rounded-lg text-lg text-white font-bold'>Latest Project</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="absolute flex gap-4 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle bg-orange-600 font-bold text-lg text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-orange-600 font-bold text-lg text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;