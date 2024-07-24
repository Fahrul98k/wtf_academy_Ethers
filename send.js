import { ethers } from "ethers";

// inisiasi variabel 
// privatekey , provider , 

const privatekey = "755ed194e2287e4e636bdda6b2c6c0dd0bc3eb50d2dd23f6c82bcd78922dd396" ; 
const rpc = "https://sepolia.infura.io/v3/0e1b983ce06840069ddd6f8202ee20f7" ; 


const provider = new ethers.JsonRpcProvider(rpc) ; 
// buat tx objek 
const tx = { 
    to: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", 
    value: ethers.parseEther("0.001") 
}

// buat wallet instance 

const wallet = new ethers.Wallet(privatekey, provider) ; 

// function 

const main = async ()  => { 
    const sendtx = await  wallet.sendTransaction(tx)
    sendtx.wait() ;  // menunggu kode selesai
    console.log(sendtx) ; 

}

main() ; 
