import React from "react";
import FollowUsSection from "../../components/follow-us-section";
import SocialList from "../../components/social-list";

type Props = {};

const MissionPage = (props: Props) => {
  return (
    <div>
      <h1 className="c-page__title">Our Mission</h1>
      <div className="c-essay">
        <p className="c-essay__paragraph">
          Our vision is to become a high quality, boutique music festival with
          an arts and culture flavour, where visitors can enjoy a carefully
          selected music programme, while also offering a range of cultural and
          artistic activities suitable for all generations to stimulate
          creativity and spread new knowledge.
          <br />
          <br />
          <p className="c-essay__poem">
            <span className="c-essay__emoji">🌳</span>
            <br />
            By limiting the number of visitors, we prevent a negative impact on
            the beautiful natural environment in which the festival takes place
            and also allow visitors to have a more intimate experience of our
            festival.
          </p>
          <br />
          <p className="c-essay__poem">
            <span className="c-essay__emoji">🫚</span>
            <br />
            By returning to our roots in the forests of the Pohorje Mountains,
            where time stops, worries fade and thoughts are calmed, our vision
            is to create, together with our visitors, a story that will lead us
            all to respect nature, promote health and well-being.
          </p>
        </p>

        <p className="c-essay__paragraph">
          <br />
          People rush past each other through lives full of commitments.
          <br />
          <br />
          <p className="c-essay__emphasize ">
            At times it seems as if we forget to take a deep breath.
          </p>
          <hr className="c-essay__divider" />
          <span className="c-emphasize-inline c-emphasize-inline--alt">
            Our mission
          </span>{" "}
          is to show people the importance of leaving our everyday commitments
          and returning to the <span className="fs-2">great nature</span>, which
          is healthy and beneficial for our mental and physical well-being.
          <br />
          <br />
          We want to become a safe, comfortable place where people will want to
          visit for a dose of{" "}
          <span className="c-emphasize-inline">positive energy</span> and the
          many benefits of a boutique music and arts festival set in an idyllic
          natural environment.
          <br />
          <br />
          <p className="c-essay__poem">
            <span className="c-essay__emoji">☮️</span>
            <br />
            By returning to our "roots", we will promote a respectful
            relationship with nature, care for health and mental well-being.
          </p>{" "}
          <br />
          As the name of the festival suggests, we are emphasising the
          importance and benefits of spending time in nature. The festival is
          also eco-conscious, encouraging the use of minimal packaging.
          <br />
          <p className="c-essay__emoji text-center">🪘🧘🪈</p>
          The festival's creators are committed to maintaining a good attitude
          towards music, and all our performers are carefully selected, as{" "}
          <span className="c-essay__emphasize">
            {" "}
            we believe in the positive vibrations of music{" "}
          </span>
          and its beneficial effect on people's well-being.
          <br />
          <hr className="c-essay__divider" />
          In addition to promoting reggae culture and soundsystems, we also
          encourage opportunities for various artistic pursuits, which are
          manifested in the many content-rich workshops offered by the festival:
          massages, yoga, gong meditation, jewellery workshop, dance class, drum
          circle, etc.
        </p>
      </div>
      <br />
      <br />
      <h4 className="text-center">
        <strong>Follow us and let's stay in touch!</strong>
      </h4>
      <div className="mt-4">
        <SocialList />
      </div>
    </div>
  );
};

export default MissionPage;
