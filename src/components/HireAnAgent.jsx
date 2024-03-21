import logo from '../assets/images/Group_779.png';
import { joiningOption } from '../data';

const HireAnAgent = () => {
  return (
    <main>
      <div className="ms-5 d-flex mt-5 gap-2 logo ">
        <img src={logo} alt="" />
        <span>
          <h1 className="fw-bold">Logo</h1>
        </span>
      </div>
      <div className="font header-section text-center ">
        <h1 className='fw-bold'>Would you like to hire an Agent?</h1>
        <p>
        To enhance our services we recommend hiring at least 1 agent who'll be responsible to resolve conflicts and <br /> complains at your end. There commission percentage is flexible. You can read the Agent's Job Description here.
        </p>
      </div>
      <section className="container  d-lg-flex d-sm-flex flex-sm-wrap justify-content-between mt-5 options-section">
        {joiningOption.map((option) => {
          const { id, name } = option;
          return (
            <div
              key={id}
              className="joining-options container d-flex border border-1 border-dark col-lg-6 rounded-4 "
            >
              <div className="row w-100 gy-5 options-row">
                <div className="col-lg-12  text-end">
                  <input type="radio" name="" id="" className="mt-3 " />
                </div>
                <div className="col-lg-12">
                  <h2 className="ms-3 lh-base fw-bold">
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
      </div>
    </main>
  )
}

export default HireAnAgent
