module.exports = () => {
  process.on("exit", () => console.log("thank you for using crashyboi"));
  process.exit(0);
};
