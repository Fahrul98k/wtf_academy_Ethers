## writeContract ##
- oke jadi di sini kita akan belajar menulis instance dari sebuah kontrak 
  sehingga kontrak itu bisa kita tulis dan baca 

  const signer = ethers.Wallet(pk)
  const contract = ethers.Contract(address , abi , signer)

- kita harus menuliskan abi function nya sehingga kita bisa menjalankan fungsi nya sesuai yng di tulis dari -   solidity contract itu 

- di sini kita menulis contract weth , contract weth nanti akan kita deposistkan eth , dan itu lansung di ubah menjadi weth 

- kita juga akan mentransfer nya 

