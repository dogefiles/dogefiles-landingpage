const fileDescription = fileType => {
  switch (fileType) {
    case "png":
      return {
        short: "PNG stands for “Portable Graphics Format”.",
        long: "Portable Network Graphics is a raster-graphics file format that supports lossless data compression. PNG was developed as an improved, non-patented replacement for Graphics Interchange Format.",
      };
    case "jpg":
      return {
        short:
          "JPG is a widely used compressed image format for containing digital images.",
        long: "JPEG or JPG is a commonly used method of lossy compression for digital images, particularly for those images produced by digital photography. The degree of compression can be adjusted, allowing a selectable trade-off between storage size and image quality.",
      };
    case "jpeg":
      return {
        short:
          "JPEG is a widely used compressed image format for containing digital images.",
        long: "JPEG is a commonly used method of lossy compression for digital images, particularly for those images produced by digital photography. The degree of compression can be adjusted, allowing a selectable trade-off between storage size and image quality.",
      };
    case "doc":
      return {
        short: "The doc format is a computer file format for text documents",
        long: "DOC file extension refers to a word processing document format. This binary file format is proprietary of Microsoft and is native to Microsoft's most popular word",
      };
    case "pdf":
      return {
        short: "PDF stands for 'portable document format'.",
        long: "Portable Document Format, standardized as ISO 32000, is a file format developed by Adobe in 1993 to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems.",
      };
    case "gif":
      return {
        short: "GIF stands for “Graphics Interchange Format”.",
        long: "The Graphics Interchange Format is a bitmap image format that was developed by a team at the online services provider CompuServe led by American computer scientist Steve Wilhite on 15 June 1987.",
      };
    case "exe":
      return {
        short:
          "exe is a common filename extension denoting an executable file for Microsoft Windows.",
        long: "An .exe is a very common file type. The .exe file extension is short for “executable.” These files are most commonly used on Windows® computers to install or run software applications.",
      };
    case "rar":
      return {
        short:
          "RAR stands for “Roshal Archive” is a proprietary archive file format that supports data compression, error recovery and file spanning.",
        long: "It was developed in 1993 by Russian software engineer Eugene Roshal and the software is licensed by win.rar GmbH. The name RAR stands for Roshal Archive.",
      };
    case "zip":
      return {
        short:
          "ZIP is an archive file format that supports lossless data compression.",
        long: "ZIP is an archive file format that supports lossless data compression. A ZIP file may contain one or more files or directories that may have been compressed. The ZIP file format permits a number of compression algorithms, though DEFLATE is the most common.",
      };
    case "csv":
      return {
        short:
          "A CSV is a comma-separated values file, which allows data to be saved in a tabular format.",
        long: "A comma-separated values file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. Each record consists of one or more fields, separated by commas. The use of the comma as a field separator is the source of the name for this file format.",
      };
    default:
      return {
        short: "Unknown file type",
        long: "The file type is unknown",
      };
  }
};
export default fileDescription;
