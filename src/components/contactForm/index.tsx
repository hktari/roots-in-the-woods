import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="card mb-4">
            {/* <div className="row mx-0 justify-content-center"> */}
            <div className="card-header py-3">
              <h5 className="mb-0">Contact us</h5>
            </div>
            <div className="card-body px-lg-2 px-xl-0 px-xxl-3">
              <form
                method="POST"
                className="w-100 p-4 bg-white"
                action="https://getform.io/f/6151fe23-cbd8-4de1-9f0d-7d1216c3cd04"
              >
                <label className="d-block mb-4">
                  <span className="form-label d-block">Your name</span>
                  <input
                    name="name"
                    required
                    type="text"
                    className="form-control"
                    placeholder="Joe Bloggs"
                  />
                </label>

                <label className="d-block mb-4">
                  <span className="form-label d-block">Address line</span>
                  <input
                    name="address"
                    required
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </label>

                <label className="d-block mb-4">
                  <span className="form-label d-block">City</span>
                  <input
                    name="city"
                    required
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </label>

                <label className="d-block mb-4">
                  <span className="form-label d-block">State/Province</span>
                  <input
                    name="state"
                    required
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </label>

                <label className="d-block mb-4">
                  <span className="form-label d-block">Zip/Postal code</span>
                  <input
                    name="zip"
                    required
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </label>

                <label className="d-block mb-4">
                  <span className="form-label d-block">Country</span>
                  <input
                    name="country"
                    required
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </label>

                <label className="d-block mb-4">
                  <span className="form-label d-block">Telephone</span>
                  <input
                    name="telephone"
                    required
                    type="tel"
                    className="form-control"
                    placeholder=""
                  />
                </label>

                <label className="d-block mb-4">
                  <span className="form-label d-block">
                    Order details
                  </span>
                  <textarea
                    name="message"
                    required
                    className="form-control"
                    rows={4}
                    placeholder="Please specify a list containing the merchandise you wish to order."
                  ></textarea>
                </label>

                <input type="hidden" name="_gotcha" style={{display:"none !important"}}/>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary px-3 rounded-3 text-white"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ContactForm;
