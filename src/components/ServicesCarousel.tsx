import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ServicesCarousel = () => {
  const images = [
    {
      original: "/image6.jpg",
      thumbnail: "/image6.jpg",
    },
    {
      original: "/image7.jpg",
      thumbnail: "/image7.jpg",
    },
    {
      original: "/image8.jpg",
      thumbnail: "/image8.jpg",
    },
    {
      original: "/image9.jpg",
      thumbnail: "/image9.jpg",
    },
  ];

  return (
    <section className="relative h-96 overflow-hidden">
      <div className="absolute inset-0">
        <ImageGallery 
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showBullets={true}
          autoPlay={true}
          slideInterval={4000}
          showNav={true}
          showFullscreenButton={false}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluciones integrales para tus proyectos de construcción e industria
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel; 