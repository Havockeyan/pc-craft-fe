
import ProductSection from "./ProductSection";
import { motion } from "framer-motion";

const Explore = () => {
  const categories = [
    {
      title: "Graphics Cards",
      items: [
        { name: "RTX 3080", price: "₹50,000" },
        { name: "RX 6800 XT", price: "₹75,000" },
      ],
    },
    {
      title: "Processors",
      items: [
        { name: "Ryzen 7 5800X", price: "₹30,000" },
        { name: "i9 12900K", price: "₹1,20,000" },
      ],
    },
    {
      title: "RAM",
      items: [
        { name: "Corsair Vengeance 16GB", price: "₹15,000" },
        { name: "G.Skill Trident 32GB", price: "₹20,000" },
      ],
    },
  ];

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 text-white pt-24 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-4">
        Explore Components for your{" "}
        <span className="text-orange-500">Custom PC</span>
      </h1>

      {categories.map((cat, index) => (
        <ProductSection key={index} title={cat.title} items={cat.items} />
      ))}
    </motion.section>
  );
};

export default Explore;
