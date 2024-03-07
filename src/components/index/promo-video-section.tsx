import React from "react";

type Props = {
  url: string;
};

const PromoVideoSection = ({ url }: Props) => {
  return (
    <div className="c-section">
      <div className="row">
        <div className="col-12 px-0 text-center">
          <video className="c-promo-video img-fluid" height="340" controls>
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default PromoVideoSection;
