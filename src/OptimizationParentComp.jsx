import React, { useState,useCallback } from 'react'
import Title from './Title'
import Text from './Text'
import Button from './Button'

const OptimizationParentComp = () => {
  const [age, setAge] = useState(0)
  const [salary, setSalary] = useState(0)

  const setAgeHandler = useCallback(() => {
    setAge(age + 10)
  },[age])
  const setSalaryHandler = useCallback(() => {
    setSalary(salary + 1000)
  },[salary])
  return (
    <>
      <Title />
      <Text text={"Age"} state={age} />
      <Button clickHandler={setAgeHandler}>Set Your Age</Button>
      <Text text={"Salary"} state={salary} />
      <Button clickHandler={setSalaryHandler}>Set Your Salary</Button>
    </>
  )
}

export default OptimizationParentComp