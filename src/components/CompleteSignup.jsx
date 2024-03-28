

const CompleteSignup = () => {
  return (
    <div>
      <main>
      <div className="ms-5 d-flex mt-5 gap-2 logo ">
        <span>
          <h1 className="fw-bold">Logo</h1>
        </span>
      </div>
      <section className="container text-center ">
        <div className="profile-text-container">
          <h1 className="bolder fw-bold">Would you like to Complete Your Profile?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="row profile-btns-row">
          <div className="col-lg-6 text-lg-end text-sm-center">
            <button className="btn bg-transparent border border-1 border-black text-dark btn-secondary fw-semibold">
              Skip for now
            </button>
          </div>
          <div className="col-lg-6 text-lg-start text-sm-center fw-semibold">
            <button className="btn space btn-secondary">Complete my profile</button>
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}

export default CompleteSignup
