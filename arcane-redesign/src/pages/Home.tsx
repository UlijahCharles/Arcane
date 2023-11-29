import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </>
  );
}

export default Home;
