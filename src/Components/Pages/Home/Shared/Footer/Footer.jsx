import companyLogo from '../../../../../../src/assets/images/checkout/CompanyLogo.jpg'
const Footer = () => {
    return (
        <div className='lg:m-8 ml-12  '>
            <footer className="footer p-10 bg-base-200 text-base-content rounded-xl">
                <aside>
                    <img className='lg:w-[200px] w-[300px] lg:ml-0  border-2 rounded-lg' src={companyLogo} alt="" />
                    <p ><span className='font-bold text-orange-500 lg:ml-0 ml-8 '>Drive Doctor Solutions</span><br /><span className='font-semibold lg:ml-0 -ml-6'> &copy; <small>All Right Reserved by Drive Doctor Solutions</small></span> </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;