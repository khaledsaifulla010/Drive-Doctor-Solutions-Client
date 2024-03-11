import { FcGoogle } from "react-icons/fc";
import logInPage from '../../../assets/images/login/login.svg'
import { FaFacebook } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
const Login = () => {


    //Google Login start//
    const { googleLogin } = useContext(AuthContext);
     //Google Login end//



     //This is for all social login // 
    const handleGoogleLogin = (media) => {
        media()
        .then (res=>console.log(res))
    }
   





    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
    }
    return (
        <div>
            <div className='w-[1000px] flex items-center  ml-52 mt-36 mb-36'>
                <div>
                    <img className='w-[500px] h-[400px]' src={logInPage} alt="" />
                </div>
                <div className='w-[500px] h-[500px] border-4 rounded-xl'>
                    <div>
                        <h1 className='text-4xl font-bold text-center mt-8 underline'>Please Log in</h1>
                    </div>
                    <div className='mt-10 ml-4'>
                        <form onSubmit={handleLogin} action="">
                            <div className='form-control'>
                                <label className='ml-4 space-y-1 font-bold'>
                                    Email <br />
                                    <input className='border-2 w-[430px] h-[50px] ml-4 rounded-lg p-2' type="email" name="email" id="" placeholder='Enter Your Email' />
                                </label>
                            </div>
                            <div className='mt-6 form-control'>
                                <label className='ml-4 space-y-1 font-bold'>
                                    Password <br />
                                    <input className='border-2 w-[430px] h-[50px] ml-4 rounded-lg p-2' type="password" name="password" id="" placeholder='Enter Your Password' />
                                </label>
                            </div>
                            <div className='form-control mt-10'>
                                <input className='btn border-2 w-[430px] h-[50px] ml-4 rounded-lg p-2 bg-orange-500 font-bold text-lg text-white' type="submit" value="Log in" />
                            </div>
                        </form>
                        <div className='flex items-center mt-10 ml-32 gap-12'>
                            <button onClick={() => handleGoogleLogin(googleLogin)}>
                                <FcGoogle className='text-4xl'></FcGoogle>
                            </button>

                            <button>
                                <FaFacebook className='text-blue-700 text-4xl'></FaFacebook>
                            </button>

                            <button>
                                <FaGithub className='text-4xl'></FaGithub>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;




