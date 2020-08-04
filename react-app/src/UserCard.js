import React from 'react'

const UserCard = (props) => {

        return(
            <div className="usercard">
                <h2>{props.userInfo.name}</h2>
                <p>{props.userInfo.login}</p>
                <img src={props.userInfo.avatar_url} alt="User" />
                <p>{props.userInfo.company}</p>
                <p>{props.userInfo.blog}</p>
                <p>{props.userInfo.location}</p>
                <p className="bio">{props.userInfo.bio}</p>
            </div>
        )
    
}

export default UserCard