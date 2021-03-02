import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json'

interface Challange { 
  type: 'body' | 'eye',
  description: string,
  amount: number,
}

interface ChallangeContextData {
  level: number, 
  currentExperience: number, 
  challengesCompleted: number,
  experienceToNextLevel: number,
  activeChallenge: Challange,
  levelUp: () => void,
  startNewChallenge:  () => void,
  resetChallenge:  () => void,
  completeChallenge:  () => void,
}

interface ChallangeContextProviderProps {
  children: ReactNode
}

export const ChallangeContext = createContext({} as ChallangeContextData)

export function ChallangeContextProvider({children}: ChallangeContextProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUp() {
    setLevel(level + 1)
  }

  function resetChallenge() { 
    setActiveChallenge(null)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    const audio = new Audio('/notification.mp3')
  
    setActiveChallenge(challenge)

    audio.play()

    if(Notification.permission === 'granted') {
      
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }
  
  function completeChallenge() { 
    if(!activeChallenge) {
      return
    }

    const {amount} = activeChallenge
    let finalExperience = currentExperience + amount

    if(finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted +1)
  }

  return (
    <ChallangeContext.Provider 
      value={{
        level, 
        currentExperience, 
        challengesCompleted, 
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
      }}
    >
      {children}
    </ChallangeContext.Provider>
  )
}