
const near = new nearApi.Near({
    keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore(),
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });
const wallet = new nearApi.WalletConnection(near, "make-melodies");

const btn = document.getElementById('sign.in')

btn.addEventListener("click", () => {
    wallet.requestSignIn({
      contractId: "dev-1627446948630-96040177127597",
    });
});

if (wallet.getAccountId()){
    window.location.href = "generator.html"
}

console.log(wallet.isSignedIn())