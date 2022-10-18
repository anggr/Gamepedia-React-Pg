import React from 'react'
import { useState, useEffect } from 'react'
const PlayerForm = ({handleCreate, playerEdit, cancelEdit, performEdit}) => {
const [Email, setEmail] = useState("")
const [Username, setUsername] = useState("")
const [Password, setPassword] = useState("")
const [Exp, setExp] = useState(0)

useEffect(() => {
  if (typeof playerEdit === 'object') {
    setEmail(playerEdit.email)
    setUsername(playerEdit.username)
    setPassword(playerEdit.password)
    setExp(playerEdit.exp)
  }

}, [playerEdit])


const submitHandler = (e) => {
    e.preventDefault()
    let player = {
        email: Email, 
        username: Username, 
        password: Password, 
        exp: Exp
    }
    if (typeof playerEdit === 'object' && playerEdit.id) 
      performEdit({...player, id: playerEdit.id})
      else
      handleCreate(player)

      handleReset()
}

  const handleReset = () => {
    cancelEdit() 
    setEmail('')
    setUsername('')
    setPassword('')
    setExp('')
  }

  return (
    <div>
        <form onSubmit={e => submitHandler(e)}>
          <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="username" value={Username}/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" value={Email}/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" value={Password}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exp" className="form-label">Experience</label>
              <input onChange={(e) => setExp(e.target.value)} type="number" className="form-control" id="exp" value={Exp}/>
            </div>
            <button type="submit" className="btn btn-primary me-2">Submit</button>
            <button onClick={handleReset} type="button" className="btn btn-warning">Reset</button>
          </form>
    </div>
  )
}

export default PlayerForm