export default function ParticlesBackground() {
  const iValues = [
    11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 13, 15, 26, 17, 13,
    28, 11, 12, 24, 10, 11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21,
    13, 15, 26, 17, 13, 28, 11, 12, 24, 10,
  ];
  return (
    <div className="absolute w-full h-screen overflow-hidden">
      <div className="relative w-full h-full flex flex-wrap justify-center items-center">
        {iValues.map((i, index) => (
          <span
            key={index}
            className={`absolute rounded-full animate-float ${
              index % 2 === 0
                ? "bg-pink-500 shadow-lg-pink"
                : "bg-blue-300 shadow-lg-blue"
            }`}
            style={{
              width: `${i}px`,
              height: `${i}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${75 / i}s`,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
