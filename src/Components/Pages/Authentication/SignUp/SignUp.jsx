import logInPage from '../../../../assets/images/login/login.svg'

const SignUp = () => {
    return (
        <div>
            <div className='w-[1000px] flex items-center  ml-52 mt-36 mb-36'>
                <div>
                    <img className='w-[500px] h-[400px]' src={logInPage} alt="" />
                </div>
                <div className='w-[500px] h-[430px] border-4 rounded-xl'>
                    <div>
                        <h1 className='text-4xl font-bold text-center mt-8 underline'>Please Sign Up</h1>
                    </div>
                    <div className='mt-10 ml-4'>
                        <form action="">
                            <div>
                                <label className='ml-4 space-y-1 font-bold'>
                                    Email <br />
                                    <input className='border-2 w-[430px] h-[50px] ml-4 rounded-lg p-2' type="email" name="email" id="" placeholder='Enter Your Email' />
                                </label>
                            </div>
                            <div className='mt-6'>
                                <label className='ml-4 space-y-1 font-bold'>
                                    Password <br />
                                    <input className='border-2 w-[430px] h-[50px] ml-4 rounded-lg p-2' type="password" name="password" id="" placeholder='Enter Your Password' />
                                </label>
                            </div>
                            <div className='mt-10'>
                                <button className='border-2 w-[430px] h-[50px] ml-4 rounded-lg p-2 bg-orange-500 font-bold text-lg text-white'>Sign Up</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;