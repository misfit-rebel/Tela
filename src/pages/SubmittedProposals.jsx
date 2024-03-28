import { amount, contracts, dates, proposals, statuses, logos } from '../data';
const SubmittedProposals = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-4">
          <h3>List of proposals</h3>
          {proposals.map((proposal) => {
            const { id, name, text } = proposal;
            return (
              <div key={id}>
                <h5>{name}</h5>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <div className="col-lg-2">
          <h5>Date</h5>
          <div className="date-column d-flex flex-column ">
            {dates.map((item) => {
              const { id, date } = item;
              return (
                <div key={id}>
                  <span>{date}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-1">
          <h5>Amount</h5>
          <div className="d-flex flex-column amount-col">
            {amount.map((item) => {
              const { id, amount } = item;
              return (
                <div key={id}>
                  <span>{amount}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-1">
          <h5>Status</h5>
          <div className="d-flex flex-column status-col">
            {statuses.map((item) => {
              const { id, status } = item;
              return (
                <div key={id}>
                  <span>{status}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-2">
          <h5>Contract</h5>
          <div className="d-flex flex-column status-col">
            {contracts.map((item) => {
              const { id, status } = item;
              return (
                <div key={id}>
                  <span>{status}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-2">
          <h5>Actions</h5>
          <div className="d-flex flex-column status-col">
            {logos.map((item) => {
              return (
                <div key={item.id}>
                  <div className="d-flex ">
                    <img src={item.chat} alt="" />
                  </div>
                  <div className="d-flex justify-content-end">
                    <img src={item.img} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
export default SubmittedProposals;
