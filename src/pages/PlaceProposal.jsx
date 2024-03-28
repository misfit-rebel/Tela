import BidInput from '../components/BidInput';

const PlaceProposal = () => {
  return (
    <div className="container">
      <main className="container border border-1">
        <header className="p-4">
          <h3>Post Inquiry Request</h3>
          <p>
            Choose the category and sub-category <br /> most suitable for your
            Gig.
          </p>
        </header>
        <BidInput labelText="Quantity" />
        <BidInput labelText="Rate*" />
        <div className="d-flex justify-content-between select-dates">
          <BidInput labelText="Start Date" />
          <BidInput labelText="End Date" />
        </div>
        <BidInput labelText="Delivery Date*" />
        <BidInput labelText="Payment Terms*" />
        <BidInput labelText="Spec" />
        <BidInput
          labelText="Rate"
          placeholder="Update according to requirements"
        />
      </main>
      <div className="text-end mt-5 ">
        <button className="bg-dark text-white px-3 py-1 rounded-1">
          Submit Request
        </button>
      </div>
    </div>
  );
};
export default PlaceProposal;
