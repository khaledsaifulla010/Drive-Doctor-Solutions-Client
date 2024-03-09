import { GrScheduleNew } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div>
            <div className="m-8 ml-28 mb-16 mt-16">

                <div className="hero  w-[1300px] h-[300px]  bg-black rounded-xl ">


                    <div className="mr-[820px]">
                        <div className="text-white">

                            <div className="flex items-center gap-2 bg-white p-4 rounded-xl">
                                <div className="text-6xl font-bold text-orange-600">
                                    <GrScheduleNew ></GrScheduleNew>
                                </div>
                                <div className="font-bold text-left text-black">
                                    <p className="text-lg">We are Open Saturday-Thursday</p>
                                    <p className="text-2xl text-center">7:00 AM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-[50px]">
                        <div className="text-white">

                            <div className="flex items-center gap-2 bg-white p-4 rounded-xl">
                                <div className="text-6xl font-bold text-orange-600">
                                    <BiSupport></BiSupport>
                                </div>
                                <div className="font-bold text-left text-black">
                                    <p className="text-lg">Have a Question?</p>
                                    <p className="text-2xl text-center">+2546 251 2658</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[780px] ">
                        <div className="text-white">

                            <div className="flex items-center gap-2 bg-white p-4 rounded-xl">
                                <div className="text-6xl font-bold text-orange-600">
                                    <FaMapLocationDot></FaMapLocationDot>
                                </div>
                                <div className="font-bold text-left text-black">
                                    <p className="text-lg">Need a Repair? Our Address</p>
                                    <p className="text-2xl text-center">Gulshan, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;