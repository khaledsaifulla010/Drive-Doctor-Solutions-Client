import team from '../../../../assets/icons/group.svg'
import support from '../../../../assets/icons/person.svg'
import wrench from '../../../../assets/icons/Wrench.svg'
import check from '../../../../assets/icons/check.svg'
import deliver from '../../../../assets/icons/deliveryt.svg'

const ChooseUS = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Why Choose <span className="text-orange-500">Us</span></h1>
            <p className="font-bold text-center mt-6"> Expertise, reliability, exceptional service, customer satisfaction, competitive <br /> pricing, and a commitment to excellence in automotive care.</p>

            <div className=" w-[1000px] mt-8 ml-64 font-bold">

                <div className=" flex items-center justify-evenly  h-[150px]">
                    <div>
                        <div>
                            <img src={team} alt="" />
                            <p className='text-center'>Expert Team</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className='ml-6' src={support} alt="" />
                            <p className='text-center'>24/7 Support</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className='ml-6' src={wrench} alt="" />
                            <p className='text-center'>Best Equipment</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className='ml-10' src={check} alt="" />
                            <p className='text-center'>100% Guarantee</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className='ml-2' src={deliver} alt="" />
                            <p className='text-center'>Timely Delivery</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChooseUS;