import React, { useEffect, useRef } from 'react'

const UseRefNameGreeting = ({name}) => {
  const previousName = useRef();

  useEffect(() => {
    if (previousName !== name) {
      console.log("Имя изменилось, было ", previousName.current, "теперь ", name)
    }
    previousName.current = name;
  }, [name])
  return (
    <div>
      <p>UseRefNameGreeting</p>
      <p>Имя: {name}</p>
      {previousName.current && (<p>Раньше имя было {previousName.current}</p>)}
    </div>
  )
}

export default UseRefNameGreeting