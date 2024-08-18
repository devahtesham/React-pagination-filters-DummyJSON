import React,{memo} from 'react'

const Text = ({text,state}) => {
  console.log("[I AM TEXT]",text);
  return (
    <div>{text}:{state}</div>
  )
}

export default memo(Text)