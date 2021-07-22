import React from 'react';

class UserCard extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: []
        }
    }

    componentDidMount() {
        this._fetchUsers()
    }

    _fetchUsers = async () => {
        const url='https://randomuser.me/api/?results=5';
        const response = await fetch(url)
            .then(response => response.json());
        this.setState({
            userData: response.results
        })
    }

    render() {
        const users = this.state.userData
        const userArray = Object.entries(users)
        return (
            <>
                <h1>RANDOM USER GENERATOR</h1>
                <button onClick={this._fetchUsers}>Get New Users</button>
                    {userArray.map((user, index) => {
                        let username = user[1]['name'].first + ' ' + user[1]['name'].last
                        let location = user[1]['location'].city + ', ' + user[1]['location'].state
                        return (
                            <div key={index} className="card">
                                <div className="card-content">
                                    <img src={user[1]['picture'].medium} alt="" />
                                    <h1>{username}</h1>
                                    <h5>Age: {user[1]['dob'].age}</h5>
                                    <p>{location}</p>
                                    <p>{user[1]['location'].country}</p>
                                </div>
                                
                            </div>
                        )
                    })}
                    
            </>

        )
    }

}

export default UserCard;