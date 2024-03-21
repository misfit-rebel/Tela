import rightArrow from '../assets/images/Frame.png';
import Bids from '../components/Bids';

const Home = () => {
  return (
    <main>
      <section className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="bg-light py-5 px-5 border border-1 rounded-5">
              <h5 className="fw-semibold text-center">Hi Chirag,</h5>
              <p className="fst-italic mb-4 text-center">
                Get matched with sellers for your project.
              </p>
              <div className="text-center">
                <button className="bg-dark text-white py-1 px-3 rounded-1 ">
                  Post an inquiry
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className=" py-5 px-5 border border-1 rounded-5 hero-bg position-relative text-white">
              <div className="overlay-wrapper overlay-wrapper-2 position-absolute h-100 top-0 bg-dark w-100 rounded-5  "></div>
              <h3 className="position-relative text-white">
                Offers by different suppliers
              </h3>
              <p className="mt-2 mb-5 pb-4 position-relative text-white">
                Show a message here encouraging him to complete profile
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container my-5 border border-1 p-4 rounded-4">
        <h3 className="mb-4 fw-bold">
          Continue browsing{' '}
          <span>
            <img src={rightArrow} alt="" />
          </span>{' '}
        </h3>
        <Bids />
      </section>

      <section className="container browse-collections d-flex align-items-center rounded-2">
        <div className="row w-100 text-white ">
          <div className="col-lg-8">
            <h3 className="fw-bold ">
              Browse our collection of 50+ <br /> Webflow Templates
            </h3>
          </div>
          <div className="col-lg-4 text-end mt-lg-4">
            <button className="px-4 py-2 rounded-5 border-0 fw-bold">
              Place Bid on Inquiry
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
