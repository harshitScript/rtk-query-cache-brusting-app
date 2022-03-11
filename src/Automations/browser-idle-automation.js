const BrowserIdleAutomation = ({ idleForInSec = "5", children }) => {
  requestIdleCallback(
    () => {
      console.log(`I executed `);
    },
    { timeout: 5000 }
  );

  return children;
};
export default BrowserIdleAutomation;
