import Planet from "@/components/models/Planet";
import { motion } from "framer-motion-3d";

export default function Experience({ section } : { section: number }) {
  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Planet name='home' />
      </motion.group>
    </>
  )
}