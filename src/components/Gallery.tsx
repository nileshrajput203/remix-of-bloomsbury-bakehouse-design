import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  label: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, label: "Interior" },
  { id: 2, label: "Cuisine" },
  { id: 3, label: "Ambiance" },
  { id: 4, label: "Dishes" },
  { id: 5, label: "Cafe View" },
  { id: 6, label: "Desserts" },
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
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">Our Gallery</span>
          <h2 className="section-title text-foreground mt-3">Moments & Memories</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A glimpse into the Blue Bay Cafe experience - where every corner tells a story.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image.id)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Placeholder gradient background */}
              <div 
                className={`w-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
                }`}
              >
                <span className="text-foreground/40 font-serif text-lg uppercase tracking-widest">
                  {image.label}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-dark-foreground font-medium uppercase tracking-wide text-sm">
                  {image.label}
                </span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-card/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-dark-muted/50 flex items-center justify-center text-dark-foreground hover:bg-dark-muted transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-4 lg:left-8 w-12 h-12 rounded-full bg-dark-muted/50 flex items-center justify-center text-dark-foreground hover:bg-primary transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-4 lg:right-8 w-12 h-12 rounded-full bg-dark-muted/50 flex items-center justify-center text-dark-foreground hover:bg-primary transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image container */}
          <div 
            className="max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <span className="text-dark-foreground/60 font-serif text-2xl uppercase tracking-widest">
                {selectedImageData?.label}
              </span>
              <p className="text-dark-foreground/40 mt-2 text-sm">Demo Image Placeholder</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;