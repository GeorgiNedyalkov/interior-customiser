import { useState, useEffect } from "react";
import "./Slider.css";
import { bigDesign } from "../../data/data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [design, setDesign] = useState(bigDesign);

  useEffect(() => {
    const lastIndex = bigDesign.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  return (
    <div className="slider">
      {design.map((slide, slideIndex) => {
        const { id, image, caption } = slide;

        let position = "nextSlide";
        if (slideIndex === index) {
          position = "activeSlide";
        }
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === design.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <figure key={id} className={position}>
            {index > 0 && (
              <button className="prev" onClick={() => setIndex(index - 1)}>
                <FiChevronLeft />
              </button>
            )}
            <img src={image} alt="" />
            {index !== design.length - 1 && (
              <button className="next" onClick={() => setIndex(index + 1)}>
                <FiChevronRight />
              </button>
            )}
            <figcaption className="slider-caption">
              {caption}
              <div className="dot-container">
                {design.map((slide, slideIndex) => {
                  return (
                    <div
                      key={slideIndex}
                      className="dot"
                      onClick={() => setIndex(slideIndex)}
                    >
                      &#8226;
                    </div>
                  );
                })}
              </div>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default Slider;