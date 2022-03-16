import React from 'react'

const Items = ({id ,title,description,price,img,quantity,amount}) => {
  return (
    <>
      <div className='items-info'>
            <div className='product-img'>
              <img src='' alt='picture1'></img>
            </div>
            <div className='title'>
              <h2>Sansung s21</h2>
              <p>BlackColor</p>
            </div>
            <div className='add-minus-quantity'>
                  <i className='fas fa-minus minus'></i>
                  <input type="text" placeholder='2'></input>
                  <i className='fas fa-plus add'></i>
            </div>
            <div className='price'>
              <h3>2000rs</h3>
            </div>

            <div className='remove-item'>
            <i className='fas fa-trash-alt remove'></i>
            </div> 
          <hr></hr>  
      </div>

      <div className='items-info'>
            <div className='product-img'>
              <img src={img} alt='image'></img>
            </div>
            <div className='title'>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className='add-minus-quantity'>
                  <i className='fas fa-minus minus'></i>
                  <input type="text" placeholder='2'></input>
                  <i className='fas fa-plus add'></i>
            </div>
            <div className='price'>
              <h3>{price}</h3>
            </div>

            <div className='remove-item'>
            <i className='fas fa-trash-alt remove'></i>
            </div> 
          <hr></hr>  
          </div> 

    <div className='items-info'>
            <div className='product-img'>
              <img src='' alt='picture1'></img>
            </div>
            <div className='title'>
              <h2>Sansung s21</h2>
              <p>BlackColor</p>
            </div>
            <div className='add-minus-quantity'>
                  <i className='fas fa-minus minus'></i>
                  <input type="text" placeholder='2'></input>
                  <i className='fas fa-plus add'></i>
            </div>
            <div className='price'>
              <h3>2000rs</h3>
            </div>

            <div className='remove-item'>
            <i className='fas fa-trash-alt remove'></i>
            </div> 
          <hr></hr>  
        </div>
    </>
  )
}

export default Items;