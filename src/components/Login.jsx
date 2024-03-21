import FormRow from './FormRow';
import logo from '../assets/images/Path_1929.png';


const Login = () => {
  return (
    <div>
      <main className="Login-page position-relative">
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
            <h6 className='text'>WELCOME BACK</h6>
            <h4 className="mb-5 mt-3 fw-bold text">Login In to your Account</h4>
            <div className="form-inputs d-flex flex-column ">
              <FormRow
                labelText="Email"
                type="text"
                placeholder="johnsondoe@nomail.com"
              />
              <FormRow
                labelText="Password"
                type="text"
                placeholder="*************** "
              />
                
            </div>
            <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" >
        Remember me
      </label>
        <span className='float-right'>Forget Password?</span>
    </div>
            <div className="text-center mt-5">
              <button className="btn">CONTINUE</button>
            </div>

            <p className="text-center mt-3 log">
              New User?{' '}
              <span className="text-decoration-underline fw-semibold">
                SIGN UP HERE
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Login
