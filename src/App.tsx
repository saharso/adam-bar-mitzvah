import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.scss";
import Slider from "react-slick";
import Welcome from "./slides/Welcome/Welcome";
import BackGroundMasonry from "./parts/BackGroundMasonry/BackGroundMasonry";
import {
  Slide1Birth,
  Slide2Birth,
  Slide3Birth,
  Slide4Birth,
  Slide5Birth,
  Slide6Birth,
} from "./slides/SlideBirth/Slide1Birth";
import {
  SlideBestFriends1,
  SlideBestFriends2,
  SlideBestFriends3,
  SlideBestFriends4,
} from "./slides/SlideBestFriends/SlideBestFriends";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  SlideCousins1,
  SlideCousins2,
  SlideCousinsAriel,
  SlideCousinsEden,
} from "./slides/Cousin/Cousin";
import {
  SlideSiblings1,
  SlideSiblings2,
  SlideSiblings3,
  SlideSiblings4,
  SlideSiblings5,
  SlideSiblings6,
} from "./slides/Siblings/Siblings";
import {
  SlideGrandParents1,
  SlideGrandParents2,
} from "./slides/GrandParents/GrandParents";

type Categories =
  | "welcome"
  | "early_childhood"
  | "best_friends"
  | "cousins"
  | "siblings"
  | "grand_parents";
const categories: Record<Categories, string> = {
  welcome: "",
  early_childhood: "ההתחלה",
  best_friends: "החברים הכי טובים",
  cousins: "בני דודים",
  siblings: "האחים הקטנים",
  grand_parents: "סבא וסבתא",
};

interface Slide {
  category: Categories;
  component: ReactNode;
}

const slides: Slide[] = [
  {
    category: "welcome",
    component: <Welcome />,
  },
  {
    category: "early_childhood",
    component: <Slide1Birth />,
  },
  {
    category: "early_childhood",
    component: <Slide2Birth />,
  },
  {
    category: "early_childhood",
    component: <Slide3Birth />,
  },
  {
    category: "early_childhood",
    component: <Slide4Birth />,
  },
  {
    category: "early_childhood",
    component: <Slide5Birth />,
  },
  {
    category: "early_childhood",
    component: <Slide6Birth />,
  },
  {
    category: "best_friends",
    component: <SlideBestFriends1 />,
  },
  {
    category: "best_friends",
    component: <SlideBestFriends2 />,
  },
  {
    category: "best_friends",
    component: <SlideBestFriends3 />,
  },
  {
    category: "best_friends",
    component: <SlideBestFriends4 />,
  },
  {
    category: "cousins",
    component: <SlideCousins1 />,
  },
  {
    category: "cousins",
    component: <SlideCousins2 />,
  },
  {
    category: "cousins",
    component: <SlideCousinsEden />,
  },
  {
    category: "cousins",
    component: <SlideCousinsAriel />,
  },
  {
    category: "siblings",
    component: <SlideSiblings1 />,
  },
  {
    category: "siblings",
    component: <SlideSiblings2 />,
  },
  {
    category: "siblings",
    component: <SlideSiblings3 />,
  },
  {
    category: "siblings",
    component: <SlideSiblings4 />,
  },
  {
    category: "siblings",
    component: <SlideSiblings5 />,
  },
  {
    category: "siblings",
    component: <SlideSiblings6 />,
  },
  {
    category: "grand_parents",
    component: <SlideGrandParents1 />,
  },
  {
    category: "grand_parents",
    component: <SlideGrandParents2 />,
  },
];

function* slideCounterGen(direction: [0 | 1 | -1], slides: Slide[]) {
  let counter = 0;
  while (true) {
    counter += direction[0];
    if (counter < 0) {
      counter = 0;
    } else if (counter >= slides.length) {
      counter = slides.length - 1;
    }
    yield slides[counter];
  }
}

function App() {
  const sliderRef = useRef<any>();
  const direction = useRef<[0 | 1 | -1]>([0]);
  const [category, setCategory] = useState<Categories>();
  const gen = useMemo(() => slideCounterGen(direction.current, slides), []);
  const settings = {
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleNext = useCallback(() => {
    direction.current[0] = 1;
    setCategory(gen.next().value?.category);
    sliderRef.current.slickNext();
  }, []);
  const handlePrev = useCallback(() => {
    direction.current[0] = -1;
    setCategory(gen.next().value?.category);
    sliderRef.current.slickPrev();
  }, []);
  return (
    <div className="App">
      <MainPanel>
        <CategoryLabel category={category || "welcome"} />
        {/* @ts-ignore */}
        <Slider {...settings} className={"slider"} ref={sliderRef}>
          {slides.map((item, index) => {
            return <Slide key={index}>{item.component}</Slide>;
          })}
        </Slider>
        <footer className={"align-y gap-1"}>
          <button
            className={"norm-button slider-button next"}
            onClick={handleNext}
          >
            <ArrowBackIcon />
          </button>
          <button
            className={"norm-button slider-button prev"}
            onClick={handlePrev}
          >
            <ArrowForwardIcon />
          </button>
        </footer>
      </MainPanel>
      <BackGroundMasonry />
    </div>
  );
}

export function CategoryLabel(props: { category: Categories }) {
  const { category } = props;
  return (
    <div className={"cateogry"}>
      <div className={"fs-title-small"}>{categories[category]}</div>
    </div>
  );
}

export function MainPanel({ children }: PropsWithChildren<unknown>) {
  return <div className={"panel"}>{children}</div>;
}

export function Slide({ children }: PropsWithChildren<unknown>) {
  return <div className={"slide"}>{children}</div>;
}

export function Loader() {
  return <div className={"loader"}>רגע...</div>;
}

export default App;
