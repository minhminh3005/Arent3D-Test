import { css } from '@emotion/css';
import { Button } from '@mui/material';
import { useTheme } from '@mui/system';

export interface IPrimaryButton {
    title: string,
    onClick: () => void
}

const PrimaryButton = ({title, onClick}: IPrimaryButton) => {
  const theme = useTheme()
  return (
    <div
        className={css`
          display: flex;
          justify-content: center;
          margin-top: ${theme.spacing(5)};
        `}
      >
         <Button variant="contained" onClick={onClick}>{title}</Button>
      </div>
   
  )
}

export default PrimaryButton