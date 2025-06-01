import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

function Home() {
  console.log(
    "hello world"
  )
  return (
    <>
    <Navbar/>
    <div className="flex flex-wrap ">

    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>

    </>
  )
}

export default Home
