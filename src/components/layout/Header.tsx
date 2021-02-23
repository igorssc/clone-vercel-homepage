import * as React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Dropdown from '@components/Dropdown'
import {
  AvatarStyle,
  HeaderContent,
  LogoStyle,
  SpecialButtonStyle
} from '@styles/components/Header'

import ThemeSwitch from '@components/ThemeSwitch'

export interface Props {
  className?: string | Record<string, unknown>
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <HeaderContent
      className={clsx('bg-trasparent py-2 px-3 flex items-center', className)}
    >
      <div className="itens">
        <LogoStyle className="dark:invert-color-logo"></LogoStyle>
      </div>

      <div className="itens">
        <nav className="middle">
          <ul>
            <li>
              <Link href={'./'}>Solutions</Link>
            </li>
            <li>
              <Link href={'./'}>Resources</Link>
            </li>
            <li>
              <Link href={'./'}>Pricing</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="itens">
        <div className="right">
          <Link href={'./'}>
            <div className="conf">
              <SpecialButtonStyle alt="Special Conference"></SpecialButtonStyle>
              <span>Special Conf</span>
            </div>
          </Link>
          <div>
            <Dropdown
              classNameButton={'bg-transparent focus:outline-none'}
              buttonLabel={
                <AvatarStyle
                  alt="avatar"
                  className="hover:bg-primary"
                ></AvatarStyle>
              }
            >
              <ul className="w-40 space-y-4 py-2 text-sm">
                <li className="flex items-center justify-between">
                  <span className="mr-auto text-gray-600 dark:text-black">
                    Theme
                  </span>
                  <ThemeSwitch />
                </li>
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>
    </HeaderContent>
  )
}

export default Header
