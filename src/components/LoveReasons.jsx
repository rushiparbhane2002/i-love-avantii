import "../styles/LoveReasons.css";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaSmile,
  FaStar,
  FaSun,
  FaMagic,
  FaHandsHelping,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaSmile />,
    title: "Your Smile",
    description: "Your smile has the power to brighten even my darkest days.",
  },
  {
    icon: <FaHeart />,
    title: "Your Kind Heart",
    description: "Your kindness and caring nature inspire me every single day.",
  },
  {
    icon: <FaStar />,
    title: "You Are Special",
    description:
      "There is something truly unique about you that makes you unforgettable.",
  },
  {
    icon: <FaSun />,
    title: "You Make My Day",
    description: "Every time I see you, my day instantly becomes happier.",
  },
  {
    icon: <FaMagic />,
    title: "Beautiful Memories",
    description:
      "Every moment connected to you has become a memory I treasure.",
  },
  {
    icon: <FaHandsHelping />,
    title: "My First Love",
    description:
      "You became my first love and a chapter of my life I'll always cherish.",
  },
];

export default function LoveReasons() {
  return (
    <section className="love-section" id="reasons">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ❤️ Why I Love You ❤️
      </motion.h1>

      <div className="love-grid">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="love-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon">{reason.icon}</div>
            <h2>{reason.title}</h2>
            <p>{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
