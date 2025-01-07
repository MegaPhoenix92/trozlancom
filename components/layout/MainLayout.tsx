import React from 'react'
import { Header, HeaderContainer, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderMenuButton } from '@carbon/react'
import { FC, ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }: { isSideNavExpanded: boolean; onClickSideNavExpand: () => void }) => (
          <Header aria-label="BUNPX">
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName prefix="RJO">BUNPX</HeaderName>
            <HeaderNavigation aria-label="Main">
              <HeaderMenuItem href="/">Home</HeaderMenuItem>
              <HeaderMenuItem href="/admin">Admin</HeaderMenuItem>
              <HeaderMenuItem href="/ceo">CEO</HeaderMenuItem>
              <HeaderMenuItem href="/user">User</HeaderMenuItem>
            </HeaderNavigation>
          </Header>
        )}
      />
      <main>{children}</main>
    </>
  )
}