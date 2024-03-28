import CreateAccount from '../components/CreateAccount'
import Login from '../components/Login';
import HireAnAgent from '../components/HireAnAgent';
import JoinAsACustomer from '../components/JoinAsACustomer';
import Agentlogin from '../components/Agentlogin';
import AgentSignup from "../components/AgentSignup";
import CompleteSignup from "../components/CompleteSignup";
import AgentSignup2 from "../components/AgentSignup2";
import Agentsignup3 from "../components/Agentsignup3";


// import CompleteProfile from '../components/CompleteProfile';
// import CreateAccount from '../components/CreateAccount';
// import JoinAsACustomer from '../components/JoinAsACustomer';
// import ProfileStep1 from '../components/ProfileStep1';
// import ProfileStep2 from '../components/ProfileStep2';
// import PlaceProposal from './PlaceProposal';
import SubmittedProposals from './SubmittedProposals';

const SignUp = () => {
  return (
    <>
      <JoinAsACustomer />
      <HireAnAgent/>
      <CreateAccount />
      <Login/>
      <Agentlogin/>
      <AgentSignup/>
      <CompleteSignup/>
      <AgentSignup2/>
      <Agentsignup3/>
      {/* <JoinAsACustomer />
      <CreateAccount />
      <CompleteProfile />
      <ProfileStep1 />
      <ProfileStep2 />
      <CreateAccount /> */}
      {/* <PlaceProposal /> */}
      <SubmittedProposals />
    </>
  );
};
export default SignUp;
