import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
const Side = () => {
  return (
    <div className={styles.nav}><img src="https://vicky-masai.github.io/images/vicky-profile-trans.png" alt="Vicky Profile Pic"/>
        <Link href={"/"}>Home</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/orders"}>Orders</Link>
        <Link href={"/addproduct"}>Add Product</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/users"}>Users</Link>
    </div> 
  )
}

export default Side