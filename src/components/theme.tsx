import * as React from 'react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const ThemeSelect = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return(
    <select data-choose-theme>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="black">Black</option>
      <option value="valentine">🌸 Pink</option>
      <option value="synthwave">🐬 Blue</option>
      <option value="cyberpunk">🐤 Yellow</option>
    </select>
  )
}

export default ThemeSelect