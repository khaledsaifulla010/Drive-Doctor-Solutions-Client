/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import logInPage from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';



const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)


        //create User
        createUser(email, password)
            .then(result => {

                Swal.fire({
                    title: 'Great!',
                    text: 'Register Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            })
            .catch(error => {

                // eslint-disable-next-line no-useless-escape
                if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/
                    .test(password)) {
                    Swal.fire({
                        title: 'OPPS!',
                        text: 'Minimum Six Characters, AtLeast One Capital Letter & One Special Character',
                        icon: 'error',
                        confirmButtonText: 'Close'
                    })
                }
            })

    }
    return (
        <div>
            <div className='w-[1000px] flex items-center  ml-52 mt-36 mb-36'>
                <div>
                    <img className='w-[500px] h-[400px]' src={logInPage} alt="" />
                </div>
                <div className='w-[500px] h-[520px] border-4 rounded-xl'>
                    <div>
                        <h1 className='text-4xl font-bold text-center mt-8 underline'>Please Sign Up</h1>
                    </div>
                    <div className='mt-10 ml-4'>
                        <form onSubmit={handleSignUp} action="">
                            <div className='form-control'>
                                <label className=' space-y-1 font-bold'>
                                    <span className="ml-4"> Email</span> <br />
                                    <input className='border-2 w-[430px] h-[50px] ml-4 rounded-lg p-2' type="email" name="email" id="" placeholder='Enter Your Email' required />
                                </label>
                            </div>
                            <div className='mt-6 form-control'>
                                <label className=' space-y-1 font-bold'>
                                    <span className="ml-4">Password</span> <br />
                                    <input className='border-2 w-[430px] h-[50px] ml-4 rounded-lg p-2' type="password" name="password" id="" placeholder='Enter Your Password' required />
                                </label>
                            </div>
                            <div className='form-control mt-10'>
                                <input className='btn border-2 w-[430px] h-[50px] ml-4 rounded-lg p-2 bg-orange-500 font-bold text-lg text-white' type="submit" value="Sign Up" />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;