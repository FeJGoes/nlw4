import { useContext } from 'react'
import { ChallangeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const {level} = useContext(ChallangeContext)
  
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/FeJGoes.png" alt="Felipe Goes"/>
      <div>
        <strong>Felipe Góes</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}