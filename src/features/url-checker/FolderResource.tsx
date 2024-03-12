import { SxProps, Theme, Tooltip } from "@mui/material";
import { Folder } from "@mui/icons-material";

export function FolderResource({ styles }: { styles: SxProps<Theme> }) {
  return (
    <Tooltip title={"Es handelt sich um einen Ordner"}>
      <Folder sx={styles} />
    </Tooltip>
  );
}
