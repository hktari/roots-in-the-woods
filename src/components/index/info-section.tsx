import React from "react";

type InfoSectionProps = {};

import childFriendlyImage from "../../images/child-friendly.jpg";
import dogFriendlyImage from "../../images/dog-friendly.jpg";
import wellbeingImage from "../../data/images/wellbeing.jpg";

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
        description:"Canine-friendly frequencies shall relax the human as well as project that energy on to animals.",
        image: dogFriendlyImage,
      },
      {
        title: "Environmentally Friendly",
        description:
          "We are emphasising the importance and benefits of spending time in nature. The festival is eco-conscious, encouraging the use of minimal packaging.",
        image:
          "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
