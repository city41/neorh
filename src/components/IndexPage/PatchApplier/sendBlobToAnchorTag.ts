function sendBlobToAnchorTag(fileBlob: Blob, fileName: string) {
  // stupid browser hack needed to download the file with a usable name
  const a = document.createElement("a");
  a.style.setProperty("display", "none");

  const fileUrl = window.URL.createObjectURL(fileBlob);

  a.href = fileUrl;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(fileUrl);
}

export { sendBlobToAnchorTag };
