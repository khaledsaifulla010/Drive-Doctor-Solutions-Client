import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className='m-8 mb-24 '>
                <div className="hero  rounded-xl h-[670px] ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='w-[900px] '>
                            <img src={person} className="w-[700px] h-[500px] rounded-lg -ml-10" />
                            <img src={parts} className="w-[300px] h-[200px] rounded-xl shadow-2xl border-8 border-white absolute -mt-36 ml-[360px]" />
                        </div>
                        <div className='ml-20 w-[900px] space-y-8 '>
                            <p className='font-bold text-orange-500 text-3xl'>About Us</p>
                            <h1 className="text-4xl font-bold">QUALIFIED AND EXPERIENCED,<br /> WE ADEPTLY NAVIGATE THIS <br /> FIELDS COMPLEXITIES.</h1>
                            <div className='font-bold space-y-4 text-justify'>
                                <p>
                                    In our field, our qualifications and extensive experience are the guiding lights illuminating intricate pathways.
                                </p>
                                <p>We navigate complexities with adeptness and offer insights born from proficiency and adaptability. Our journey is marked by a relentless pursuit of excellence, shaping meaningful contributions and fostering growth in our domain.</p>
                            </div>
                            <div>
                                <button className='bg-orange-500 p-3 rounded-lg text-lg text-white font-bold'>Get More Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;