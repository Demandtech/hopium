import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [rotate, setRotate] = useState(false)
  
  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleRotate = ()=>{
    setRotate(!rotate)
  }


  return (
    <AppContext.Provider value={{isModalOpen , rotate, closeModal, openModal, handleRotate}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
