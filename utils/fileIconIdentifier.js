const fileIconIdentifier = fileType => {
  const iconType = iconName => `/file_icons/${iconName}.png`;
  const fileTypes = [
    "after-effects",
    "ai",
    "audition",
    "avi",
    "bridge",
    "css",
    "csv",
    "dbf",
    "doc",
    "dreamweaver",
    "dwg",
    "exe",
    "fireworks",
    "fla",
    "flash",
    "html",
    "illustrator",
    "indesign",
    "iso",
    "js",
    "json",
    "mp3",
    "mp4",
    "pdf",
    "photoshop",
    "png",
    "ppt",
    "prelude",
    "premiere",
    "psd",
    "rar",
    "rtf",
    "svg",
    "txt",
    "xls",
    "xml",
    "zip",
    "7z",
    "dll"
  ];

  const icon = fileTypes.find(fileT => fileT === fileType);
  if (!icon) return iconType("file");

  return iconType(icon);
};
export default fileIconIdentifier;
