import * as React from 'react'
import clsx from 'clsx'

export interface Props {
  classNameDrop?: string | Record<string, unknown>
  buttonLabel: string | React.ReactElement
  classNameButton?: string | Record<string, unknown>
}

const Dropdown: React.FC<Props> = ({
  classNameDrop,
  buttonLabel,
  classNameButton,
  children
}) => {
  const node = React.useRef<HTMLDivElement>()
  const [showDropdown, setShowDropdown] = React.useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (node?.current?.contains(e.target as Node)) {
      return
    }
    setShowDropdown(false)
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={node} className={clsx('relative inline-block', classNameDrop)}>
      <button
        className={clsx(
          'p-2 rounded-full',
          {
            'hover:bg-primary hover:bg-opacity-25':
              !showDropdown && !classNameButton,
            'bg-primary text-white': showDropdown && !classNameButton
          },
          classNameButton
        )}
        onClick={toggleDropdown}
      >
        {buttonLabel}
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-1 bg-white dark:bg-gray-400 border dark:border-gray-700 rounded shadow-md p-2 space-y-2">
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown
