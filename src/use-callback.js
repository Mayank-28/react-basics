import React, { useState, useCallback } from 'react'

const functionsCounter = new Set()

const MyCallback = () => {
  const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  },[count])

  const decrement = useCallback(() => {
    setCount(count - 1)
  },[count])
  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1)
  },[otherCounter])

  functionsCounter.add(increment)
  functionsCounter.add(decrement)
  functionsCounter.add(incrementOtherCounter)

  console.log(functionsCounter)

  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  )
}

export default MyCallback;