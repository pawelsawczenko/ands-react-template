import { motion } from 'motion/react'

interface AnimationHoverWrapperProps extends React.PropsWithChildren {
  isActive?: boolean
  isTapable?: boolean
}

export const AnimationHoverWrapper = ({
  isActive = true,
  isTapable = true,
  children
}: AnimationHoverWrapperProps) => {
  return (
    <motion.div
      whileHover={isActive ? { scale: 1.1 } : undefined}
      whileTap={isActive && isTapable ? { scale: 0.9 } : undefined}>
      {children}
    </motion.div>
  )
}
