import { SxProps, Tooltip } from "@mui/material";
import { Close } from "@mui/icons-material";

export function NoResource({ styles }: { styles: SxProps }) {
  return (
    <Tooltip title={"Nichts verfügbar unter dieser URL"}>
      <Close sx={styles} />
    </Tooltip>
  );
}
