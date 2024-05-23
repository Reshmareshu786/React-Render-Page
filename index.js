const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 className='main-heading'>Congratulations</h1>
    <div className='card-container'>
      <img
        className='image'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <div className='content-container'>
        <h1 className='name'>Kiran V</h1>
        <p className='description'>
          Vishnu Institute of Computer Education and Technology, Bhimavaram
        </p>
      </div>
      <img
        className='image image2'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
