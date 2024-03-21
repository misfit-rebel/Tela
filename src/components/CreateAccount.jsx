import FormRow from './FormRow';
import fbIcon from '../assets/images/Group24.png';
import logo from '../assets/images/Path_1929.png';
import googleIcon from '../assets/images/logos_google-icon.png';
const CreateAccount = () => {
  return (
    <main className="sign-up-page position-relative">
      <div className="overlay-wrapper position-absolute h-100 bg-dark w-100 "></div>
      <div className="ms-5 d-flex  gap-2 logo-container mb-5 pt py-3">
        <img src={logo} alt="" className="z-1 mb-4 " />
        <span className="z-1 ">
          <h1 className="fw-bold text-white ">Logo</h1>
        </span>
      </div>
      <div className="container form-container">
        <div className="row gx-5">
          <div className="col-lg-6 text-white z-1 d-flex flex-column justify-content-center ">
            <h3 className="fw-semibold text ">Building the Future...</h3>
            <p className='text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>
          <div className="col-lg-6 z-1 bg-white p-5 rounded-4">
            <h6 className='text'>LETS GET YOU STARTED</h6>
            <h4 className="mb-5 mt-3 fw-bold text">Create an Account</h4>
            <div className="form-inputs d-flex flex-column ">
              <FormRow
                labelText="Industry Name"
                type="text"
                placeholder="Johnson Doe"
              />
              <FormRow
                labelText="Product Type"
                type="text"
                placeholder="Select Product Type"
              />
              <FormRow
                labelText="Email"
                type="email"
                placeholder="johnsondoe@nomail.com"
              />
              <FormRow
                labelText="Password"
                type="password"
                placeholder="Set password"
              />
            </div>
            <div className="text-center mt-5">
              <button className="btn">GET STARTED</button>
            </div>
            <div className="position-relative text-center mt-4 ">
              <p className="fw-semibold z-2 bg-white position-relative d-inline-block px-2">
                or login with{' '}
              </p>
              <hr className="position-absolute top-0 left-0 w-100 " />
            </div>
            <div className="row bt">
              <div className="col-lg-6 ">
                <div className="border border-2 p-2 rounded-3 text-center">
                  <img src={fbIcon} alt="" /> Sign in with Facebook
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="border border-2 p-2 rounded-3 text-center">
                  <img src={googleIcon} alt="" /> Sign in with Google
                </div>
              </div>
            </div>

            <p className="text-center mt-3">
              Already have an account?{' '}
              <span className="text-decoration-underline fw-semibold">
                LOGIN HERE
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default CreateAccount;
