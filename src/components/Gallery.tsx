import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryCoffee from "@/assets/gallery-coffee.jpg";
import galleryDesserts from "@/assets/gallery-desserts.jpg";
import galleryFood from "@/assets/gallery-food.jpg";
import cardMenu from "@/assets/card-menu.jpg";
import cardAbout from "@/assets/card-about.jpg";

interface GalleryImage {
  id: number;
  label: string;
  src: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, label: "Our Space", src: galleryInterior },
  { id: 2, label: "Coffee Art", src: galleryCoffee },
  { id: 3, label: "Sweet Treats", src: galleryDesserts },
  { id: 4, label: "Fresh & Healthy", src: galleryFood },
  { id: 5, label: "Our Creations", src: cardMenu },
  { id: 6, label: "Our Team", src: cardAbout },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
    if (direction === "prev") {
      const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
      setSelectedImage(galleryImages[newIndex].id);
    } else {
      const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(galleryImages[newIndex].id);
    }
  };

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage);

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-primary uppercase tracking-widest text-xs sm:text-sm font-medium">Our Gallery</span>
          <h2 className="font-serif font-light tracking-wide text-foreground mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Moments & Memories
          </h2>
          <p className="text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A glimpse into the Blink Beyond Cafe experience - where every corner tells a story.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image.id)}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                index === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div 
                className={`w-full overflow-hidden ${
                  index === 0 ? "aspect-[4/3] md:aspect-square" : "aspect-square"
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-dark-foreground font-medium uppercase tracking-wide text-xs sm:text-sm">
                  {image.label}
                </span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-card/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-muted/50 flex items-center justify-center text-dark-foreground hover:bg-dark-muted transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-2 sm:left-4 lg:left-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-muted/50 flex items-center justify-center text-dark-foreground hover:bg-primary transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-2 sm:right-4 lg:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-muted/50 flex items-center justify-center text-dark-foreground hover:bg-primary transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image container */}
          <div 
            className="max-w-5xl w-full max-h-[80vh] rounded-xl sm:rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImageData?.src} 
              alt={selectedImageData?.label}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Image label */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-center">
            <span className="text-dark-foreground/80 font-medium uppercase tracking-widest text-xs sm:text-sm">
              {selectedImageData?.label}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;