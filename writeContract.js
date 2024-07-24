import { ethers } from "ethers";

// buat wallet , provider , abi ,  instance contract  , lakukan aksi kepada itu kontrak 

// variabbel
const privatekey = "755ed194e2287e4e636bdda6b2c6c0dd0bc3eb50d2dd23f6c82bcd78922dd396" ; 
const rpc = "https://sepolia.infura.io/v3/0e1b983ce06840069ddd6f8202ee20f7" ; 
const address = "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6" ; 

const abiWETH = [
    "function balanceOf(address) public view returns(uint)",
    "function deposit() public payable",
    "function transfer(address, uint) public returns (bool)",
    "function withdraw(uint) public",
];
// n

const provider = new ethers.JsonRpcProvider(rpc)
const signer = new ethers.Wallet(privatekey, provider) ; 

const contractWeth = new ethers.Contract(address, abiWETH, signer ) ; 

const main = async () => { 
    const swap = await contractWeth.deposit({value: ethers.parseEther("0.002")})
    await swap.wait() ; 
    console.log(swap) ; 
}

main() ; 

