import React from 'react'

const UserProfile = ({user}) => {
  
  return (
    <div>
      <>
      <span>{user.name}, </span>
      <span>{user.age} лет</span>
      </>
    </div>
  )
}

export default UserProfile