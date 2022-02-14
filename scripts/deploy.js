async function main() {
    const Donat = await ethers.getContractFactory("Donat");
    const donat = await Donat.deploy();
    console.log("Contract address:", donat.address);
}
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });