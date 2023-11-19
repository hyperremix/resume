import { SxProps, styled, unstable_styleFunctionSx } from '@mui/system';
import { baseComponentOptions } from './tableUtils';

type Props = {
  sx?: SxProps;
};

export const TableCell = styled(
  'td',
  baseComponentOptions,
)<Props>({
  width: 'auto',
  overflow: 'hidden',
  wordWrap: 'break-word',
  verticalAlign: 'top',
  textAlign: 'left',
  unstable_styleFunctionSx,
});
