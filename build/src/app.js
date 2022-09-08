const main = document.querySelector(".main");
const text = document.querySelector(".text");
const connect = document.querySelector(".connect");

const state = {};

const init = () => {
    if (window.ethereum) {
        text.textContent = "metamask is available";
    } else {
        main.textContent = "metamask isn't available";
    }
};

init();
connect.addEventListener("click", async () => {
    try {
        accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        state.userAccount = accounts[0];
        console.log(state);
    } catch (error) {
        console.log(error);
    }
});
