import React from 'react'

const Loading = () => {
  return (
    <>
      <div class="d-flex align-items-center mt-5 pt-5" style={{width:'50%',marginLeft:'auto',marginRight:'auto'}}>
         <h1 className='text-danger'><strong>Loading...</strong></h1>
        <div className="spinner-border ml-auto text-danger" role="status" aria-hidden="true"></div>
    </div>
    </>
  )
}

export default Loading