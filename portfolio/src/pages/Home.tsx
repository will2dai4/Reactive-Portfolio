import Terminal from '../components/Terminal';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="intro-head ml-[40px] mt-[10px] inline-block p-0">
                <h1 className="text-[var(--primary-color)] intro-head-text text-4xl font-bold mb-4">
                    {'>'} Hi, I'm William Dai
                </h1>
            </div>

            <div className="university mt-[36px] ml-[40px] p-0">
                <h1 className="m-0 p-0 text-3xl">University of Waterloo</h1>
                <h2 className="m-0 mt-[2px] p-0 text-2xl opacity-80">Honours Mathematics</h2>
            </div>

            <Terminal />
        </div>
    );
};

export default Home;