import { SvgIcon } from "@mui/material";

const CloseIcon = () => {
  return (
    <SvgIcon viewBox="0 0 32 32">
      <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
      <path d="M7 7L26 26" stroke="#FF963C" strokeWidth="3" />
      <path d="M7 26L26 7" stroke="#FF963C" strokeWidth="3" />
    </SvgIcon>
  );
};

export default CloseIcon;
