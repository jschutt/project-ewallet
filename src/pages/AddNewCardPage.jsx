import React from 'react'

const AddNewCardPage = () => {
  return (
    <div>
      <form>
        <input type="number" id="cardNumber" placeholder="Card number" required/>
        <input type="text" id="cardholder" placeholder="Cardholder's name" required/>
        <input type="number" id="expirationDate" placeholder="MM/YY" required/>
        <input type="number" id="ccv" placeholder="CCV" required/>
        <select defaultValue="" name="cardOptions" id="cardOptions" required>
          <option value="" disabled>Card</option>
          <option value="visa">VISA</option>
          <option value="mastercard">MasterCard</option>
        </select>
      </form>
      <button>Add Card</button>
      </div>
  )
}

export default AddNewCardPage