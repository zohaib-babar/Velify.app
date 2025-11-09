export default function Hero() {
  return (
    <section className="bg-[url('https://avada.com/wp-content/uploads/2021/01/doc_image_element_hero.jpg')]  h-[750px] rounded-b-4xl text-center justify-center bg-cover bg-center px-6 py-16  items-center gap-10">
      <div className="md:w-6/12"></div>
      <h1 className="text-4xl mt-20  font-bold text-black justify-center text-center">
        Valet Parking. Simplified.
      </h1>

      <p className=" text-lg text-black text-center">
        A seamless valet experience with instant digital tickets, cashless
        payments,<br></br>and secure car retrieval — all powered by a single QR code
      </p>

      <div>
        <div className="flex gap-10 items-center mt-20  justify-center">
          <div className="h-70 w-55 mt-10"><img src="https://valify.app/_next/image?url=%2Fvalify%2FCarInfo.png&w=256&q=75" alt="car information" /></div>
          <img
            className="h-160 w-80 p-5"
            src="https://valify.app/_next/image?url=%2Fvalify%2Fmobile-image.png&w=640&q=75"
            alt="mobile image"
          />
          <div className="h-70 w-55 mt-10 "><img src="https://valify.app/_next/image?url=%2Fvalify%2FPricingRule.png&w=256&q=75" alt="pricing" /></div>
        </div>
      </div>
      <div className="md:w-6/12"></div>
    </section>
  );
}
