import logo from "../assets/images/Path_1929.png";
import { signupSteps } from "../data";
import FormRow from "./FormRow";
import SelectInput from "./SelectInput";
import unchecked from "../assets/images/checked.png";
const ProfileStep2 = () => {
  return (
    <main className="profile-step2 position-relative">
      <div className="overlay-wrapper position-absolute h-100 bg-dark w-100 "></div>
      <div className="ms-5 d-flex  gap-2 logo-container mb-5 pt">
        <img src={logo} alt="" className="z-1 mb-4" />
        <span className="z-1">
          <h1 className="fw-bold text-white">Logo</h1>
        </span>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-lg-4 text-white z-1">
            <h3>Building the Future...</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            
              <div className="timeline position-relative">
            <div className="progress-bar position-absolute bg-white" ></div>
                {signupSteps.map((step) => {
                  const { id, name, text } = step;
                  return (
                    <ul key={id} className="list-unstyled">
                      <li className="mb-5">
                        <h6>
                          <span>
                            <img src={unchecked} alt="" className="me-3" />
                          </span>
                          {name}
                        </h6>
                        <p className="ms-5">{text}</p>
                      </li>
                    </ul>
                  );
                })}
              </div>
          </div>
          <div className="col-lg-8 bg-white z-2 rounded-4">
            <div className="form-container p-4 ">
              <h4 className="text-center">LET'S GET YOU STARTED</h4>
              <div className="row">
                <div className="col-lg-6 d-flex flex-column flex-gap-3">
                  <h5>Add Tax Details</h5>
                  <FormRow
                    placeholder="23 444 555 666"
                    type="tel"
                    labelText="NTN (National Tax Number)"
                  />
                  <FormRow
                    placeholder="23 444 555 666"
                    type="tel"
                    labelText="GST (Goods and Services tax)"
                  />
                  <FormRow
                    placeholder="23 444 555 666"
                    type="tel"
                    labelText="Address"
                  />

                  <h5>Certificate</h5>
                  <SelectInput
                    options={[
                      "BCI",
                      "Primark",
                      "PIW",
                      "Organic",
                      "Exemption",
                      "Cotton",
                    ]}
                  />
                  <SelectInput options={["Select Date", "Select Date"]} />
                  <span>Note: Exemption Certificate</span>
                </div>
                <div className="col-lg-6 d-flex flex-column gap-3">
                  <h5>Conditions</h5>
                  <SelectInput options={["GST", "EFS", "NON GST"]} />
                  <FormRow
                    placeholder="Add Commission here"
                    labelText="Comission %"
                  />
                  <div className="d-flex flex-column gap-3 mt-3">
                    <h5>Payments Terms</h5>
                    <SelectInput
                      options={[
                        "Advance PDC",
                        "Post PDC",
                        "Advance",
                        "Credit",
                        "LC",
                        "CDC",
                      ]}
                    />
                    <SelectInput options={["Days"]} />
                    <SelectInput options={["Enter PDC Days here"]} />
                  </div>
                  <button className="bg-black text-white py-2 rounded-3 ">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ProfileStep2;
