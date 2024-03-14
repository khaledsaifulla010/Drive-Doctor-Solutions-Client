/* eslint-disable react/prop-types */
import { MdSubtitles } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
const ServiceCard = ({ service }) => {
    const { title, image, price } = service;
    return (
        <div>
            <div>
                <div className="card   w-[450px] h-[400px] border-2">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="flex items-center gap-1 text-2xl font-bold">
                            <MdSubtitles></MdSubtitles>
                            <h2>{title}</h2>
                        </div>

                        <div className="flex items-center  font-bold">
                            <p className="text-xl">Price : {price}</p>
                            <FaDollarSign></FaDollarSign>
                        </div>

                        <div>
                            <button className="bg-orange-500 font-bold text-lg text-white p-2 rounded-xl mt-4">See Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;