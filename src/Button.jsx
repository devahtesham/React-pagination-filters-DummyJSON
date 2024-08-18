import React,{memo} from 'react'

const Button = ({clickHandler,children}) => {
  console.log("[I AM BUTTON]",children);
  return (
    <button onClick={clickHandler}>{children}</button>
  )
}

export default memo(Button)