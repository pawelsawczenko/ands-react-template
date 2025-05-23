import { motion } from 'motion/react'

export const AnimationEnterWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </motion.div>
  )
}
