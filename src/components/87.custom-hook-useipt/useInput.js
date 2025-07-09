import React, { useState } from 'react'

export default function useInput(init) {

  const [value , setValue] = useState(init)

  const reset = () => {
    setValue("")
  }

  const bind = {
    value: value || init,
    onChange: e => setValue(e.target.value),

  }

  return [value , bind , reset]

}
