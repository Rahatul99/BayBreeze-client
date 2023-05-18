import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <div className='mb-12'>
        <AwesomeSlider className="w-full" startup={true} interval={5000} >
            <div className="hero h-[100%]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1514849543360-3228a8766079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1060&q=80")`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl font-bold">Welcome to BayBreeze Playthings</h1>
                        <p className="mb-5">Experience the heart-pounding excitement and adrenaline rush of high-speed miniature racing with our extensive and diverse collection of meticulously crafted, top-of-the-line toy cars.</p>
                        <button className="btn btn-outline">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="hero h-[100%]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1578652520385-c05f6f3b5de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl font-bold">Welcome to BayBreeze Playthings</h1>
                        <p className="mb-5">Experience the heart-pounding excitement and adrenaline rush of high-speed miniature racing with our extensive and diverse collection of meticulously crafted, top-of-the-line toy cars.</p>
                        <button className="btn btn-outline">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="hero h-[100%]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl font-bold">Welcome to BayBreeze Playthings</h1>
                        <p className="mb-5">Experience the heart-pounding excitement and adrenaline rush of high-speed miniature racing with our extensive and diverse collection of meticulously crafted, top-of-the-line toy cars.</p>
                        <button className="btn btn-outline">Shop Now</button>
                    </div>
                </div>
            </div>
        </AwesomeSlider>
        </div>
    );
};

export default Banner;