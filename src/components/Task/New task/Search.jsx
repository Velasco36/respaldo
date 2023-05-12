import React from 'react'

export function Search() {
  return (
    <div style={{textAlign: 'center'}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        
    <button
  type='submit'
    style={{
    
      marginTop: '50px',
      width: '20%',
      height: '50px',
      borderRadius: '40px',
      cursor: 'pointer',
      border: '0px',        
      background: 'linear-gradient(2deg, rgba(0, 38, 240, 2), rgba(0, 0, 0, 3))',      
    }}>
       

    
    <span style={{display: 'flex'}} class="material-symbols-outlined">
        search 
        
    </span>

  </button>

  </div>
 
  )
}
