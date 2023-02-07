import React from 'react'
import './styles.css'

const ProfileBox = () => {
  return (
    <div className="profile__box">
      <img
        src="https://avatars.githubusercontent.com/u/86578873?v=4"
        className="profile"
        alt="user's profile"
      />
      <div>
        <h3>Francisco Silva</h3>
        <span>@Burntroll</span>
        <p>I'm a Front End Developer and a DevOps Engineer from Brazil, and currently livingabroad</p>
      </div>
    </div>
  )
}

export { ProfileBox };