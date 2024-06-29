import { useState } from "react";
import {
  ReactImageCarouselViewer,
  Image as CarouselImage,
} from "react-image-carousel-viewer";
import { Screenshot } from "@/types";
import clsx from "clsx";

type ScreenshotCarouselProps = {
  className?: string;
  gameMameName: string;
  hackId: string;
  screenshots?: Screenshot[];
};

function ScreenshotCarousel({
  className,
  gameMameName,
  hackId,
  screenshots,
}: ScreenshotCarouselProps) {
  const [carouselIsOpen, setCarouselOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  if (!screenshots) {
    return null;
  }

  if (screenshots.length === 0) {
    return null;
  }

  function getScreenshotsForCarousel(): CarouselImage[] {
    return screenshots!.map((ss) => {
      const url =
        require(`../../screenshots/${gameMameName}/${hackId}/${ss.fileName}`).default;

      return {
        src: url.src,
        description: ss.description,
        id: ss.fileName,
      };
    });
  }

  return (
    <div
      className={clsx(className, "grid items-start gap-x-2 gap-y-2")}
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr)",
      }}
    >
      {screenshots.map((ss, index) => {
        const url =
          require(`../../screenshots/${gameMameName}/${hackId}/${ss.fileName}`).default;
        return (
          <img
            key={ss.fileName}
            src={url.src}
            className="cursor-pointer"
            onClick={() => {
              setCarouselIndex(index);
              setCarouselOpen(true);
            }}
          />
        );
      })}
      <ReactImageCarouselViewer
        open={carouselIsOpen}
        onClose={() => setCarouselOpen(false)}
        images={getScreenshotsForCarousel()}
        startIndex={carouselIndex}
      />
    </div>
  );
}

export { ScreenshotCarousel };
