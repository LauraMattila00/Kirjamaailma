import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function Cart({cart}) {
  return (
    <>
    <HiOutlineShoppingCart/>
    <span>{cart.length}</span>
    </>
  )
}
