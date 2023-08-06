import React from 'react'
import './ExpenseItem.css'
import {MdDelete, MdEdit} from 'react-icons/md'

const ExpenseItem = ({expense, handleDelete, handleEdit}) => {

    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'>{expense.charge}</span>
          <span className='amount'>{expense.amount}</span>
        </div>
        <div>
          <button className='edit-btn'
            onClick={() => handleEdit(expense.id)}
          >
            <MdEdit/>
          </button>
          <button className='clear-btn' onClick={() =>
            // console.log(`${this.props.expense.id} clicked`)
            handleDelete(expense.id)
            }>
            <MdDelete/>
          </button>
        </div>
      </li>
    )

}

export default ExpenseItem