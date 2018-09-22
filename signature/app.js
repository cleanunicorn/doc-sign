//alert(2);

// var web3 = new Web3(Web3.givenProvider || web3.currentProvider || "http://localhost:8545");

// web3.eth.personal.sign("testing", "0xD216bC605776a6f4a6434c0C0595f9C408f22361", "").then(console.log)

window.addEventListener('load', function () {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    // Now you can start your app & access web3 freely:
    startApp()
})

function startApp() {
    // Sign message
    // web3js.eth.personal.sign(
    //     "testing", // message
    //     web3.eth.defaultAccount, // account
    //     "" // password
    // ).then(console.log)

    // Send transaction
    // web3js.eth.sendTransaction(
    //     {
    //         from: web3.eth.defaultAccount,
    //         to: web3.eth.defaultAccount,
    //         value: 0,
    //         gas: 200000,
    //         data: "0x11223344",
    //     },
    // );

    // Encode parameters
    // web3js.eth.abi.encodeParameters(['string'], ['gigel']);
}

// https://github.com/OpenZeppelin/openzeppelin-solidity/blob/9e1da49f235476290d5433dac6807500e18c7251/contracts/ECRecovery.sol

// https://ethereum.stackexchange.com/questions/1777/workflow-on-signing-a-string-with-private-key-followed-by-signature-verificatio