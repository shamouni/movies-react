import Slides from "./Slides";
import { TSlideItem } from "./types";
import { useSlider } from "./useSlider";

interface SliderProps {
  data?: TSlideItem[];
}

const chunkData = (data: TSlideItem[], parts: number): TSlideItem[][] => {
  const chunkSize = Math.ceil(data.length / parts);
  return Array.from({ length: parts }, () => data.splice(0, chunkSize));
};

const Slider: React.FC<SliderProps> = ({ data = [] }) => {
  const { containerRef } = useSlider(data.length);

  const [list1, list2, list3] = chunkData([...data], 3);

  return (
    <section className="slider">
      <div className="container" ref={containerRef}>
        <div id="prev-slide" className="arrow-slide" />

        <div className="row-s slide-smooth">
          <Slides items={list1} />
        </div>

        <div className="row-s reverse slide-smooth2">
          <Slides items={list2} />
        </div>

        <div className="row-s slide-smooth">
          <Slides items={list3} />
        </div>

        <div id="next-slide" className="arrow-slide" />
      </div>
    </section>
  );
};

export default Slider;
