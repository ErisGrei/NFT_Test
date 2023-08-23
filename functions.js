const abi = [
  "function freeMint() public",
  "function freeMintTo() public",
  "function balanceOf(address) public view returns (uint256)",
  "function balanceOf(address _owner) constant returns (uint balance)",

]
async function setContract() {
  const contract = document.getElementById("contract");
  CONTRACT_ADDRESS = contract.value;
  CURRENCY_NAME = await getName();

  document.getElementById(
    "current_contract"
  ).innerText = `Contract: ${CONTRACT_ADDRESS}`;

  document.getElementById(
    "my_balance"
  ).innerText = `My Wallet Balance: ${await myBalance()}`;

  contract.value = "";
}
async function freeMint() {
  const ethers = window.ethers;
  const signer = await window.provider.getSigner();
  //your contract
  const contract = new ethers.Contract("0x1E269Fa1934D2dE349C6dD4c7776dF0a7aFa5E61", abi, signer);
  const tx = await contract.freeMint();
  console.log(tx);
}
async function myBalance() {
  const contracts = document.getElementById("contract");
  CONTRACT_ADDRESS = contracts.value;
  document.getElementById(
    "my_balance"
  ).innerText = `My Balance: ${await myBalance()}`;

  contracts.value = "";

  const accounts = await window.provider.send("eth_requestAccounts", []);
  const ethers = window.ethers;
  const signer = await window.provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
  const balance = await contracts.balanceOf(accounts[1]);
  return balance;
}
async function balanceOf() {
  const balanceOf = document.getElementById("balanceOf");
  const ethers = window.ethers;
  const signer = await window.provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
  const balance = await contract.balanceOf(balanceOf.value);
  return balance;
}

async function freeMintTo() {
  const ethers = window.ethers;
  const signer = await window.provider.getSigner();
  //contract of your client
  const contract = new ethers.Contract("0x9F3cDbAAdE19C4a431eA0dbbCE1974a22E5EdE03", abi, signer);
  const tx = await contract.freeMintTo();
  console.log(tx);
}
