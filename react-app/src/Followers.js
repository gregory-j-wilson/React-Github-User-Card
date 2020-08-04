import React from 'react'

const Followers = (props) => {

        return(
            <div className="followers">
                <h2>Followers:</h2>
                
                
                {props.followerInfo.map( (follower) => {
                    return <div className="oneFollower" key={follower.id}>
                        <h3>{follower.login}</h3> 
                        <img src={follower.avatar_url} alt="Follower" />
                        </div>
                })}
                
            </div>
        )
    
}

export default Followers