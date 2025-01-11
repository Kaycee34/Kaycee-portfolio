import myHeadshot from "../assets/Headshot.jpg"; // Replace with the actual path to your image
import ShapeBlur from "./ShapeBlur"; // Replace with the actual path to the ShapeBlur component

const Hero = () => {
  return (
    <section className="flex items-center justify-between h-screen px-[7%]">
      {/* Left side content */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm</h1>
        <h2 className="text-4xl font-semibold mb-4 custom-gradient-text">
          Udechukwu Destiny Kelechi
        </h2>
        <h3 className="text-3xl font-semibold mb-6 custom-gradient-text">
          Fullstack Developer
        </h3>
        <p className="text-xl mb-6">
          A Fullstack Developer passionate about building dynamic, responsive,
          and user-friendly websites and applications. I specialize in
          front-end and back-end technologies, always striving to create
          seamless, engaging user experiences.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Download CV
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition duration-300">
            View Projects
          </button>
        </div>
      </div>

      {/* Right side (headshot with ShapeBlur) */}
      <div className="hidden md:block relative w-[30%] aspect-square">
        {/* ShapeBlur */}
        <ShapeBlur
          variation={0}
          pixelRatioProp={window.devicePixelRatio || 1}
          shapeSize={0.5}
          roundness={0.5}
          borderSize={0.05}
          circleSize={0.5}
          circleEdge={1}
        />

        {/* Headshot */}
        <img
          src={myHeadshot}
          alt="Udechukwu Destiny Kelechi"
          className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
