import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const services = useLoaderData();
    return (
        <div>

            <div className="grid grid-cols-3 gap-y-8 ml-[42px] mb-24 mt-16">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;