import logo from "../assets/images/Group_779.png";

const CompleteProfile = () => {
  return (
    <main>
      <div className="ms-5 d-flex mt-5 gap-2 logo ">
        <img src={logo} alt="" />
        <span>
          <h1 className="fw-bold">Logo</h1>
        </span>
      </div>
      <section className="container text-center ">
        <div className="profile-text-container">
          <h1 className="bolder">Take a moment to complete your profile</h1>
          <p>Let's finish setting up your profile</p>
        </div>
        <div class="row profile-btns-row">
          <div class="col-lg-6 text-lg-end text-sm-center">
            <button className="btn bg-transparent border border-1 border-black text-dark btn-secondary fw-semibold">
              Skip for now
            </button>
          </div>
          <div class="col-lg-6 text-lg-start text-sm-center fw-semibold">
            <button className="btn btn-secondary">Complete my profile</button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CompleteProfile;
