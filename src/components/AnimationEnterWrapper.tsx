import { motion } from 'motion/react'
import { ChildrenProps } from '../types'

export const AnimationEnterWrapper = ({ children }: ChildrenProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </motion.div>
  )
}
