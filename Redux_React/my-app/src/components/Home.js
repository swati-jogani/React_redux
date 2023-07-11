import React from 'react'

function Home() {
  return (
    <>
     <div>
      <div className='add-to-cart'>
        <img src="https://i0.wp.com/mychoiceshop.in/wp-content/uploads/2020/10/cropped-cart-icon.png?fit=512%2C512&ssl=1" alt="" height={30} width={30}/>

      </div>
     </div>
      <div>Home</div>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src="https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg" alt="" />
        </div>
        <div className='text-wrapper item'>
          <span>
            I-phone
          </span>
          <span>
            price: $1000.00
          </span>
        </div>
        <div className='btn-wrapper item'>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default Home