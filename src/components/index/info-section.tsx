import React from "react";

type InfoSectionProps = {};

import childFriendlyImage from "../../images/child-friendly.jpg";
import dogFriendlyImage from "../../images/dog-friendly.jpg";
import wellbeingImage from "../../images/wellbeing.jpg";
import campingImage from "../../images/camping.jpg";

import InfoItem from "../info-item";
const InfoSection = (props: InfoSectionProps) => {
  const data = {
    info: [
      {
        title: "Family Friendly",
        description:
          "The program will include many varied workshops for adults and children that will take place throughout the festival days. ",
        image: childFriendlyImage,
      },
      {
        title: "Dog Friendly",
        description:
          "Canine-friendly frequencies shall relax the human as well as project that energy on to animals.",
        image: dogFriendlyImage,
      },
      {
        title: "Environmentally Friendly",
        description:
          "We are emphasising the importance and benefits of spending time in nature. The festival is eco-conscious, encouraging the use of minimal packaging.",
        image: campingImage,
      },
      {
        title: "Raises awareness about mental health and well-being.",
        description:
          "The festival's creators are committed to maintaining a good attitude towards music, and all our performers are carefully selected, as we believe in the positive vibrations of music and its beneficial effect on people's well-being.",
        image: wellbeingImage,
      },
    ],
  };

  return (
    <section className="c-section">
      <h2 className="c-section__title"></h2>

      <div className="c-floating-layout clearfix">
        {data.info.map((info) => (
          <div key={info.title} className="c-floating-layout__item">
            <InfoItem info={info} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
