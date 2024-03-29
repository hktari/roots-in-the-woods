import React from "react";

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const ContactForm = ({ onSubmit }: Props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 ">
          <div className="card ">
            {/* <div className="row mx-0 justify-content-center"> */}
            <div className="card-header py-3">
              <h4 className="mb-0">CONTACT US</h4>
            </div>
            <div className="card-body">
              <form
                method="POST"
                className="w-100 p-2 bg-white"
                data-netlify="true"
                netlify-honeypot="_gotcha"
                name="merch"
                onSubmit={onSubmit}
              >
                <input type="hidden" name="form-name" value="merch" />
                <div className="row">
                  <div className="col-12 col-md-6">
                    <label className="d-block mb-3">
                      <span className="form-label d-block">Your name</span>
                      <input
                        name="name"
                        required
                        type="text"
                        className="form-control w-100 p-1"
                        placeholder=""
                      />
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-6">
                    <label className="d-block mb-3">
                      <span className="form-label d-block">Address line</span>
                      <input
                        name="address"
                        required
                        type="text"
                        className="form-control w-100 p-1"
                        placeholder=""
                      />
                    </label>
                  </div>

                  <div className="col col-md-6">
                    <label className="d-block mb-3">
                      <span className="form-label d-block">City</span>
                      <input
                        name="city"
                        required
                        type="text"
                        className="form-control w-100 p-1"
                        placeholder=""
                      />
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-6">
                    <label className="d-block mb-3">
                      <span className="form-label d-block">
                        Zip/Postal code
                      </span>
                      <input
                        name="zip"
                        required
                        type="text"
                        className="form-control w-100 p-1"
                        placeholder=""
                      />
                    </label>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="d-block mb-3">
                      <span className="form-label d-block">State/Province</span>
                      <input
                        name="state"
                        type="text"
                        className="form-control w-100 p-1"
                        placeholder=""
                      />
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-6">
                    <label className="d-block mb-3">
                      <span className="form-label d-block">Country</span>
                      <input
                        name="country"
                        required
                        type="text"
                        className="form-control w-100 p-1"
                        placeholder=""
                      />
                    </label>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="d-block mb-3">
                      <span className="form-label d-block">Telephone</span>
                      <input
                        name="telephone"
                        required
                        type="tel"
                        className="form-control w-100 p-1"
                        placeholder=""
                      />
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <label className="d-block mb-3">
                      <span className="form-label d-block">Order details</span>
                      <textarea
                        name="message"
                        required
                        className="form-control w-100 p-1 px-2 py-1"
                        style={{ resize: "none" }}
                        rows={4}
                        placeholder="Please specify a list containing the merchandise you wish to order."
                      ></textarea>
                    </label>
                  </div>
                </div>

                <input
                  type="hidden"
                  name="_gotcha"
                  style={{ display: "none !important" }}
                />
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-3 mt-2 rounded-3 text-white text-uppercase"
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
