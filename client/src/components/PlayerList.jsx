import React from 'react'

const PlayerList = ({ players, selectEdit }) => {



    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.username}</td>
                            <td>{player.email}</td>
                            <td>{player.exp}</td>
                            <td><button onClick={() => selectEdit(player.id)} type='button' className="btn btn-primary">Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList