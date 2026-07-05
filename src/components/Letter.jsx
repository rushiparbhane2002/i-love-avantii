import "../styles/Letter.css";
import { motion } from "framer-motion";

function Letter() {
  return (
    <section className="letter-section">
      <motion.div
        className="letter-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>💌 A Letter To My Love ❤️ Avantii</h1>

        <p>Dear Avantii,</p>

        <p>
          Sometimes words are never enough to express what the heart truly
          feels.
        </p>

        <p>
          The day I first saw you, something changed inside me. Every time I see
          you, my day feels brighter.
        </p>

        <p>
          Thank you for becoming one of the most beautiful memories of my life.
        </p>

        <h2>❤️ Forever in My Heart ❤️</h2>
      </motion.div>
    </section>
  );
}

export default Letter;
