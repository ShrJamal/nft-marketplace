import { useEffect, useState } from 'react'
import { BiSun } from 'react-icons/bi'
import { FaMoon } from 'react-icons/fa'
import { themes, useTheme } from '~/hooks/useTheme'

export default function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [darkClasses, setDarkClasses] = useState('')
  const [lightClasses, setLightClasses] = useState('')

  useEffect(() => {
    setDarkClasses(
      theme == 'dark'
        ? 'bg-gray-700 text-indigo-500'
        : 'bg-gray-700 text-white',
    )
    setLightClasses(
      theme == 'dark'
        ? 'bg-gray-700 text-white'
        : 'bg-gradient-to-r from-indigo-700 to-fuchsia-600 text-white',
    )
  }, [theme])

  const toggleTheme = (switchTo: string) => {
    if (switchTo === 'light' && theme === 'dark') {
      setTheme('light')
      setLightClasses(
        'bg-gradient-to-r from-indigo-700 to-fuchsia-600 text-white',
      )
      setDarkClasses('bg-gray-700 text-white')
    }
    if (switchTo === 'dark' && theme === 'light') {
      setTheme('dark')
      setDarkClasses('bg-gray-700 text-indigo-500')
      setLightClasses('bg-gray-700 text-white')
    }
  }

  return (
    <div className={className}>
      <div className="flex">
        <button
          onClick={() => toggleTheme('light')}
          className={
            'p-3 mx-2 rounded-lg cursor-pointer text-[20px] font-bold ' +
            lightClasses
          }
        >
          <BiSun />
        </button>
        <button
          onClick={() => toggleTheme('dark')}
          className={
            'p-3 mx-2 rounded-lg cursor-pointer text-[20px] font-bold ' +
            darkClasses
          }
        >
          <FaMoon />
        </button>
      </div>
    </div>
  )
}

{
  /* <button
className={t === theme ? 'bg-primary-focus' : ''}
key={i}
onClick={() => setTheme(t)}
>
<span className="capitalize">{t} Theme</span>
</button> */
}
