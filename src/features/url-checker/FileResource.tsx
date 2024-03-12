import { SxProps, Tooltip } from "@mui/material";
import { FileCopy } from "@mui/icons-material";

export function FileResource({ styles }: { styles: SxProps }) {
  return (
    <Tooltip title={"Es handelt sich um eine Datei"}>
      <FileCopy sx={styles} />
    </Tooltip>
  );
}
