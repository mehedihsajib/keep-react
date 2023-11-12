import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../Keep/ThemeContext'

export const SkeletonAvatar: FC = () => {
  const theme = useTheme().theme.skeleton
  return <div className={twMerge(theme.avatar)}></div>
}
