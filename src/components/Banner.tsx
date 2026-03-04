import bannerImg from "@/assets/banner-cha-bee-chico.png";

const Banner = () => {
  return (
    <section className="relative w-full bg-background overflow-hidden pt-12">
      <div className="max-w-3xl mx-auto md:max-w-2xl md:px-8">
        <div className="overflow-hidden rounded-lg">
          <img
            src={bannerImg}
            alt="Be e Chico - Convite"
            className="w-full h-auto object-cover scale-[1.4] md:scale-[1.25]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
