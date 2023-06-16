import React,{ createContext, useContext,useState } from "react";


export const FormDataContext= createContext()

export const FormDataProvider = ({children}) => {
  const [formData, setFormData] = useState({
    name:'',
    story:'',
    description: ''
  })

  const updateFormData = (newData) => {
    setFormData((prevData) => ({...prevData, ...newData}))
  }

  return (
    <FormDataContext.Provider value={{formData, updateFormData}}>
      {children}
    </FormDataContext.Provider>
  )
}
