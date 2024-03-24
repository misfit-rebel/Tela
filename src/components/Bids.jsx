import logo from '../assets/images/Group190.png';
import Slider from 'react-slick';
import { bids } from '../data';
function Bids() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings} className="row ">
        {bids.map((bid) => {
          const { id, offer, price, paymentType } = bid;
          return (
            <div
              key={id}
              className="container col-lg-3 col-sm-12  d-flex flex-column single-slide border border-1 rounded-4 py-4 px-3 mt-5"
            >
              <img
                src={logo}
                style={{ width: '150px', height: '40px' }}
                alt="logo"
              />
              <h6 className="fw-bolder">{offer}</h6>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fw-regular">STARTING AT </span>
                  <h5 className="fw-bold">${price}</h5>
                </div>
                <div className="text-end">
                  <span className="fw-regular">PAYMENT TYPE</span>
                  <h5 className="fw-bold">{paymentType}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Bids;
