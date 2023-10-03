import React from 'react';
import { LayoutProps } from './inrerface';
import { LayoutContent } from './style';

export const Layout = ({children}: LayoutProps) => {
    return (
        <LayoutContent>
            {children}
        </LayoutContent>
    )
}