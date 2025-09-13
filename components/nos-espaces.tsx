"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function NosEspaces() {
  const t = useTranslations("nosEspaces");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const workspaceImages = t.raw("images") || [];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === "ArrowLeft") {
        navigateToPrevious();
      } else if (e.key === "ArrowRight") {
        navigateToNext();
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  const navigateToPrevious = () => {
    if (selectedImageIndex === null) return;
    const newIndex =
      selectedImageIndex === 0
        ? workspaceImages.length - 1
        : selectedImageIndex - 1;
    setSelectedImageIndex(newIndex);
  };

  const navigateToNext = () => {
    if (selectedImageIndex === null) return;
    const newIndex =
      selectedImageIndex === workspaceImages.length - 1
        ? 0
        : selectedImageIndex + 1;
    setSelectedImageIndex(newIndex);
  };

  return (
    <section id="nos-espaces" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#031e32] mb-6 text-balance">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {workspaceImages.length > 0 &&
            workspaceImages.map(
              (image: { src: string; alt: string }, index: number) => (
                <div
                  key={index}
                  className={`
                relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer
                ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
                ${index === 3 ? "lg:col-span-2" : ""}
                ${index === 6 ? "md:col-span-2 lg:col-span-1" : ""}
              `}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <Image
                    src={image.src || "/placeholder.jpg"}
                    alt={image.alt}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )
            )}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#FF8200] hover:bg-[#e6750e] text-white px-8 py-3 rounded-lg font-medium"
            style={{ backgroundColor: "#FF8200", color: "white" }}
          >
            {t("cta.label")}
          </Button>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Fermer"
            >
              <X size={32} />
            </Button>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                navigateToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              aria-label="Image précédente"
            >
              <ChevronLeft size={24} />
            </Button>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                navigateToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              aria-label="Image suivante"
            >
              <ChevronRight size={24} />
            </Button>

            <Image
              src={
                workspaceImages[selectedImageIndex].src || "/placeholder.jpg"
              }
              width={1000}
              height={800}
              alt={workspaceImages[selectedImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
