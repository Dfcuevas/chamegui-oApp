/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";

const Carousel = ({ CardsCarousel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === CardsCarousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative overflow-hidden bg-indigo100  w-full py-5">
      <h2 className="font-Lora text-center text-xl font-semibold mb-6">
        Funcionalidades pensadas para optimizar el proceso
      </h2>
      <div
        className="flex transition-transform duration-500 ease-in-out w-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {CardsCarousel.map((card) => (
          <div
            key={card.id}
            className="bg-white flex flex-col items-center p-3 gap-3 flex-shrink-0 w-full"
          >
            <img
              src={card.icon}
              alt={card.title}
              width={48}
              height={48}
              className="mx-auto"
            />
            <h3 className="font-semibold text-base">{card.title}</h3>
            <p className="text-center text-base">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-4 gap-2">
        {CardsCarousel.map((card) => (
          <div
            key={card.id}
            className={`w-3 h-3 rounded-full border border-grayBorder cursor-pointer ${
              card.id === currentIndex + 1 && "bg-grayBorder"
            }`}
            onClick={() => setCurrentIndex(card.id - 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
