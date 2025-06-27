import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";
import { useRef, useState, useEffect } from "react";

function Carousel({ children }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params.navigation
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy(); // Reset to avoid duplicate
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleSlideChange = (swiper) => {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  };

  return (
    <div className={styles.carouselWrapper}>
      {/* Left Arrow */}
      <div
        ref={prevRef}
        className={`${styles.navBtn} ${styles.prevBtn}`}
        style={{ display: atStart ? "none" : "flex" }}
      >
        <LeftArrow />
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
        className={styles.swiperContainer}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* Right Arrow */}
      <div
        ref={nextRef}
        className={`${styles.navBtn} ${styles.nextBtn}`}
        style={{ display: atEnd ? "none" : "flex" }}
      >
        <RightArrow />
      </div>
    </div>
  );
}

export default Carousel;
