import React,{memo} from 'react'

const Title = () => {
    console.log("[I AM TITLE COMP]");
  return (
    <div>Learning Optimization</div>
  )
}

export default memo(Title)