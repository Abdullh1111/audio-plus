import  { useState, useEffect } from 'react';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { src: '/images.jfif', alt: 'Image 1' },
        { src: '/AirPods-Pro-2nd-Gen-Gear.webp', alt: 'Image 2' },
        { src: '/images (1).jfif', alt: 'Image 3' },
    ];

    const totalSlides = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div className="relative mt-10">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div className="w-full flex-shrink-0" key={index}>
                            <img src={slide.src} alt={slide.alt} className="w-full h-[50vh] xl:h-[70vh]" />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Circles (Indicators) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
