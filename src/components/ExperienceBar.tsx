import { useContext } from 'react'
import { ChallangeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const {currentExperience, experienceToNextLevel} = useContext(ChallangeContext)
  const percentTonextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width: `${percentTonextLevel}%`}}/>
        <span className={styles.currentExperience} style={{left: `${percentTonextLevel}%`}}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}