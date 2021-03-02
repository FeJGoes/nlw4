import { useContext } from 'react'
import { ChallangeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
  const {challengesCompleted} = useContext(ChallangeContext)
  
  return (
    <div className={styles.completedChallenges}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}