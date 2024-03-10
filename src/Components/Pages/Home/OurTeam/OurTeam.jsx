import member1 from '../../../../assets/images/team/2.jpg'
import member2 from '../../../../assets/images/team/1.jpg'
import member3 from '../../../../assets/images/team/3.jpg'

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const OurTeam = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Meet Our <span className="text-orange-500">Team</span></h1>
            <p className="font-bold text-center mt-6">Experienced Technicians Committed to Quality Car Servicing, Maintenance,<br /> Repairs, and Customer Satisfaction. Your Trusted Automotive Care.</p>
            <div className='flex items-center justify-evenly mt-12 mb-12'>

                <div className="card w-[400px] border-2 p-2">
                    <figure><img src={member1} alt="" /></figure>
                    <div className="card-body">
                        <h2 className=" text-3xl text-center font-bold">Atiqul Islam</h2>
                        <p className='text-lg text-center font-semibold'>Engine Expert</p>
                        <div className='flex items-center justify-evenly mt-8'>
                            <button><FaFacebook className='text-3xl text-blue-900'></FaFacebook></button>
                            <button> <FaTwitter className='text-3xl text-sky-500'></FaTwitter></button>
                            <button><FaLinkedin className='text-3xl text-blue-700'></FaLinkedin></button>
                            <button><FaInstagramSquare className='text-3xl text-orange-600 '></FaInstagramSquare></button>
                        </div>
                    </div>
                </div>
                <div className="card w-[400px] border-2 p-2">
                    <figure><img src={member2} alt="" /></figure>
                    <div className="card-body">
                        <h2 className=" text-3xl text-center font-bold">Mansa Musa</h2>
                        <p className='text-lg text-center font-semibold'>Repair Master</p>
                        <div className='flex items-center justify-evenly mt-8'>
                            <button><FaFacebook className='text-3xl text-blue-900'></FaFacebook></button>
                            <button> <FaTwitter className='text-3xl text-sky-500'></FaTwitter></button>
                            <button><FaLinkedin className='text-3xl text-blue-700'></FaLinkedin></button>
                            <button><FaInstagramSquare className='text-3xl text-orange-600 '></FaInstagramSquare></button>
                        </div>
                    </div>
                </div>
                <div className="card w-[400px] border-2 p-2">
                    <figure><img src={member3} alt="" /></figure>
                    <div className="card-body">
                        <h2 className=" text-3xl text-center font-bold">Shihab Shahin</h2>
                        <p className='text-lg text-center font-semibold'>Emissions Specialist</p>
                        <div className='flex items-center justify-evenly mt-8'>
                            <button><FaFacebook className='text-3xl text-blue-900'></FaFacebook></button>
                            <button> <FaTwitter className='text-3xl text-sky-500'></FaTwitter></button>
                            <button><FaLinkedin className='text-3xl text-blue-700'></FaLinkedin></button>
                            <button><FaInstagramSquare className='text-3xl text-orange-600 '></FaInstagramSquare></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurTeam;