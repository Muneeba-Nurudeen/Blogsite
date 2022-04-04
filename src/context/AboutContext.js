import { createContext } from "react";

export const AboutContext = createContext();

function AboutContextProvider({ children }) {
const about={
    Name: "Elon Musk",
    Hobbies:["Watching movies", "listening to music", "and dancing"],
    Bio:"Musk was born to a Canadian mother and South African father, and raised in Pretoria, South Africa. He briefly attended the University of Pretoria before moving to Canada at age 17 to avoid conscription. He was enrolled at Queen's University and transferred to the University of Pennsylvania two years later, where he received a bachelor's degree in economics and physics."
}

  return(
  <AboutContext.Provider value={{about}}> {children}</AboutContext.Provider>
  
  
  )
}

export default AboutContextProvider
