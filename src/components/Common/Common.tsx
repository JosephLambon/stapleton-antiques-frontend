import * as React from 'react';
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps
} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material';

interface LinkBehaviourProps extends RouterLinkProps {
    ref?: React.Ref<HTMLAnchorElement>;
}
// Wrapper - forwards all props 
function LinkBehaviour(props: LinkBehaviourProps) {
    const { ref, ...rest } = props;
    return <RouterLink ref={ref} {...rest} />;
}

export interface NavigationLinkProps extends TypographyProps {
    to?: string;
    children: React.ReactNode;
    ref?: React.Ref<HTMLAnchorElement>;
}

export function NavigationLink(props: NavigationLinkProps) {
  const { to, children, ref, ...typographyProps } = props;
  
  return (
    <Typography
      ref={ref}
      component={LinkBehaviour}
      to={to}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
}