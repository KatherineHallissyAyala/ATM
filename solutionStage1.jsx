const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Withdrawal", "Deposit"];
  console.log(`value of isDeposit ${isDeposit}`);
  console.log(`array choice: ${choice[Number(isDeposit)]}`)
  return (
    <label className="label huge">
      <h3> {choice[Number(isDeposit)]} </h3>
      <input type="number" onChange={onChange}></input>
      <input type="submit" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  const [totalState, setTotalState] = React.useState(0); // Account total at Bank
  const [isDeposit, setIsDeposit] = React.useState(true);
  let transactionState = 0; // state of this transaction
  let status = `Account Balance $ ${totalState}`;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    transactionState = Number(event.target.value);
  };
  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + transactionState : totalState - transactionState;
    if (isDeposit && (transactionState > 100)) {
      newTotal = newTotal + 1;
    }
    if (newTotal < 0){
      alert('Sorry, you are short on funds.');
    }
    else{
      setTotalState(newTotal);
    }
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <button onClick={()=>setIsDeposit(true)}>Deposit</button>
      <button onClick={()=>setIsDeposit(false)}>Withdrawal</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
