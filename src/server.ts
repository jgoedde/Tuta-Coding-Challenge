export async function resolveUrl(
  url: string,
): Promise<{ resourceType: "folder" | "file" | undefined }> {
  return new Promise((res) => {
    setTimeout(
      () => {
        if (Math.random() > 0.5) {
          return res({
            resourceType: Math.random() > 0.5 ? "file" : "folder",
          });
        }
        return res({ resourceType: undefined });
      },
      Math.random() * 2000 + 3000,
    );
  });
}
