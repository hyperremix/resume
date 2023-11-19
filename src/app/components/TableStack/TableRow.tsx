import { SxProps, styled, unstable_styleFunctionSx } from '@mui/system';
import { baseComponentOptions } from './tableUtils';

type Props = {
  sx?: SxProps;
};

export const TableRow = styled(
  'tr',
  baseComponentOptions,
)<Props>({
  unstable_styleFunctionSx,
});
