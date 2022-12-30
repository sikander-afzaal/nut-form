import meta from "../Assets/meta.svg";
import connect from "../Assets/connect.svg";

const ConnectModal = ({ setModal }) => {
  return (
    <>
      <div onClick={() => setModal(false)} className={`overlay`}></div>
      <div className={`pop-up`}>
        <div className="pop">
          <img src={meta} alt="" />
          <h2>MetaMask</h2>
        </div>
        <div className="pop">
          <img src={connect} alt="" />
          <h2>Wallet Connect</h2>
        </div>
      </div>
    </>
  );
};

export default ConnectModal;
