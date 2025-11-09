export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-[40px]  shadow-[0_-4px_30px_rgba(0,0,0,0.08)]">
      <div className="absolute top-0 left-0 w-full h-[20px] bg-[#A6FF00]" />

      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[900px] h-[900px]"
        >
          <path
            d="M0,100 L150,500 L350,0 L500,100"
            fill="none"
            stroke="#A6FF00"
            strokeWidth="60"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center">

        <div className="flex justify-center items-center gap-2 mb-4">
          <div><img src="https://valify.app/valify/logo-black.svg" alt="velify" /></div>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
          Ready to Upgrade Your<br></br> Valet Experience?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From instant digital tickets to seamless payments and faster retrievals — 
          our valet platform makes parking smarter for both customers and businesses.
        </p>

        
        {/* <div className="my-10 mx-auto w-24 h-[2px] bg-[#A6FF00]" /> */}

        <div><img className="h-[490px] ml-220  justify-end" src="https://valify.app/_next/image?url=%2Fvalify%2Ffooter-image.png&w=640&q=75" alt="" /></div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-[20px] bg-[#A6FF00]" />
    </footer>
  );
}
