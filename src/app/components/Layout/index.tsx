import { Box, Breakpoint, Container, Divider } from '@mui/material';
import React, { ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

type Props = {
  tabs?: ReactNode;
  maxWidth?: Breakpoint;
  children: ReactNode;
};

export const Layout = ({ tabs, maxWidth, children }: Props) => (
  <>
    <Header />
    {tabs && (
      <>
        <Divider />
        <Box sx={{ backgroundColor: (theme) => theme.palette.action.hover }}>{tabs}</Box>
      </>
    )}
    <Container maxWidth={maxWidth}>
      <Box my={3}>{children}</Box>
    </Container>
    <Footer />
  </>
);
