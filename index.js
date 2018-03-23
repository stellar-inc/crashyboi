module.exports = () => {
  const bai = () => console.log("thank you for using crashyboi");
  process.on("exit", bai);
  process.exit(0);
};
