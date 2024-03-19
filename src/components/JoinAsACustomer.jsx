import logo from '../assets/images/Group_779.png';
import { joiningOptions } from '../data';
const JoinAsACustomer = () => {
  return (
    <main>
      <div className="ms-5 d-flex mt-5 gap-2 logo ">
        <img src={logo} alt="" />
        <span>
          <h1 className="fw-bold">Logo</h1>
        </span>
      </div>
      <div className="font header-section text-center ">
        <h1>Join us and Let’s Collaborate</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
      </div>
      <section className="container d-lg-flex d-sm-flex flex-sm-wrap justify-content-between mt-5 options-section">
        {joiningOptions.map((option) => {
          const { id, name } = option;
          return (
            <div
              key={id}
              className="joining-options d-flex align-items-center border border-1 border-dark  rounded-4 "
            >
              <div className="row w-100 gy-5 options-row">
                <div className="col-lg-12 text-end">
                  <input type="radio" name="" id="" className=" " />
                </div>
                <div className="col-lg-12">
                  <h2 className="ms-3 lh-base fw-bold">
                    Join as a <br />
                    {name}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <div className="text-center mt-5">
        <button className="border-0 create-account-btn btn ">
          {' '}
          Create Account{' '}
        </button>
        <p className="mt-3">
          Already have an account?{' '}
          <span className="fw-semibold text-decoration-underline ">
            LOGIN HERE
          </span>
        </p>
      </div>
    </main>
  );
};
export default JoinAsACustomer;
