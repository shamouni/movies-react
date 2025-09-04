import { Link } from "react-router";
import SliderSkeleton from "./Slider-skeleton";
import { TSlideItem } from "./types";

const ROOT = process.env.REACT_APP_ROOT || "";

interface ISlidesProps {
  items?: TSlideItem[];
}

const Slides: React.FC<ISlidesProps> = ({ items = [] }) => {
  const getLink = (id: number): string => {
    const rnd = Math.ceil(Math.random() * 7) + 1;
    const idMock = id > 8 ? rnd : id;
    return ROOT + "/post/" + idMock;
  };

  return (
    <>
      {items && items.length > 0 ? (
        items.map((i) => (
          <Link to={getLink(i.id)} key={i.id} className="slide">
            <img src={`${ROOT}/assets/images/${i.image}`} alt={i.title} />
          </Link>
        ))
      ) : (
        <SliderSkeleton />
      )}
    </>
  );
};

export default Slides;
