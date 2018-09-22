# Document signature 

## Abstract

Alice and Bob want to have an agreement.

They create a document stating what they agree with; this is considered a contract.
They both need to sign the document before they start the collaboration.

Alice and Bob exchange their own public Ethereum addresses. They can sign the document asynchronously. Each can check if the other party signed without direct communication.

## Methods

### addDocument

### signDocument

Arguments:

- `docHash` - the hash of the document
- `time` - time of the signature
- `signature` - signature done with `web3.eth.personal.sign()`

### checkSignature

### freezeSignatures