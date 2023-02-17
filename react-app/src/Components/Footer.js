const Footer = () => {
  let today = new Date()

  return (
    <footer className='container'>
      <div className='row justify-content-center mt-5 mb-3'>
        <div className='col-8'>
          <h1>Team member Allocation - {today.getFullYear()}</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
