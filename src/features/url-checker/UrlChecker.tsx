import {
  Box,
  CircularProgress,
  Container,
  TextField,
  useTheme,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { isValidHttpUrl } from "../../utils/url.ts";
import { resolveUrl } from "../../server.ts";
import { UrlUnavailable } from "./UrlUnavailable.tsx";
import { FileResource } from "./FileResource.tsx";
import { FolderResource } from "./FolderResource.tsx";

export function UrlChecker() {
  const [value, setValue] = useState("");

  const { loadingState, resource } = useResourceType(value);

  const theme = useTheme();

  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "flex-end", my: "1rem" }}>
        <TextField
          variant={"standard"}
          error={!isValidHttpUrl(value) && value !== ""}
          label={"URL überprüfen"}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          placeholder={"https://meine-domain.de"}
        />
        <Box sx={{ ml: 1, my: 0.5 }}>
          {loadingState === "pending" && <CircularProgress size={"1.5rem"} />}
          {resource === "folder" && (
            <FolderResource styles={{ color: theme.palette.primary.main }} />
          )}
          {resource === "file" && (
            <FileResource styles={{ color: theme.palette.success.main }} />
          )}
          {resource === undefined && loadingState === "success" && (
            <UrlUnavailable styles={{ color: theme.palette.error.main }} />
          )}
        </Box>
      </Box>
    </Container>
  );
}

function useResourceType(rawInput: string) {
  const [url] = useDebouncedValue(rawInput, 500);

  const [resource, setResource] = useState<"folder" | "file">();
  const [loadingState, setLoadingState] = useState<
    "initial" | "pending" | "success"
  >("initial");

  // Reset when input changes and in theory, cancel ongoing fetch/xhr requests
  useEffect(() => {
    setLoadingState("initial");
    setResource(undefined);
  }, [rawInput]);

  const load = useCallback(async () => {
    if (!isValidHttpUrl(url)) {
      return;
    }
    setLoadingState("pending");
    const resourceResult = await resolveUrl(url);
    setLoadingState("success");

    setResource(resourceResult.resourceType);
  }, [url]);

  useEffect(() => {
    void load();
  }, [load]);

  return {
    resource,
    loadingState,
  };
}
