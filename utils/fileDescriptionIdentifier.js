const fileDescriptionIdentifier = fileType => {
  switch (fileType) {
    //Image Type
    case "png":
      return {
        short: "PNG stands for “Portable Graphics Format”.",
        heading: "What is PNG?",
        long: "Portable Network Graphics is a raster-graphics file format that supports lossless data compression. PNG was developed as an improved, non-patented replacement for Graphics Interchange Format.",
      };
    case "jpg":
      return {
        short:
          "JPG is a widely used compressed image format for containing digital images.",
        heading: "What is JPG?",
        long: "JPEG or JPG is a commonly used method of lossy compression for digital images, particularly for those images produced by digital photography. The degree of compression can be adjusted, allowing a selectable trade-off between storage size and image quality.",
      };
    case "jpeg":
      return {
        short:
          "JPEG is a widely used compressed image format for containing digital images.",
        heading: "What is JPEG?",
        long: "JPEG is a commonly used method of lossy compression for digital images, particularly for those images produced by digital photography. The degree of compression can be adjusted, allowing a selectable trade-off between storage size and image quality.",
      };
    case "gif":
      return {
        short: "GIF stands for “Graphics Interchange Format”",
        heading: "What is GIF?",
        long: "The Graphics Interchange Format is a bitmap image format that was developed by a team at the online services provider CompuServe led by American computer scientist Steve Wilhite on 15 June 1987.",
      };

    //Media Type
    case "mp4":
      return {
        short: "MP4 stands for “MPEG-4 Part 14 or MP4”",
        heading: "What is MP4?",
        long: "MP4 is a digital multimedia container format most commonly used to store video and audio, but it can also be used to store other data such as subtitles and still images. Like most modern container formats, it allows streaming over the Internet. The only filename extension for MPEG-4 Part 14 files as defined by the specification is .mp4. MPEG-4 Part 14 (formally ISO/IEC 14496-14:2003) is a standard specified as a part of MPEG-4.",
      };

    //Document Type
    case "doc":
      return {
        short: "The doc format is a computer file format for text documents",
        heading: "What is DOC?",
        long: "DOC file extension refers to a word processing document format. This binary file format is proprietary of Microsoft and is native to Microsoft's most popular word",
      };
    case "pdf":
      return {
        short: "PDF stands for 'portable document format'.",
        heading: "What is PDF?",
        long: "Portable Document Format, standardized as ISO 32000, is a file format developed by Adobe in 1993 to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems.",
      };
    case "csv":
      return {
        short:
          "A CSV is a comma-separated values file, which allows data to be saved in a tabular format.",
        heading: "What is CSV?",
        long: "A comma-separated values file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. Each record consists of one or more fields, separated by commas. The use of the comma as a field separator is the source of the name for this file format.",
      };

    case "exe":
      return {
        short:
          "exe is a common filename extension denoting an executable file for Microsoft Windows.",
        heading: "What is EXE?",
        long: "An .exe is a very common file type. The .exe file extension is short for “executable.” These files are most commonly used on Windows® computers to install or run software applications.",
      };
    case "rar":
      return {
        short:
          "RAR stands for “Roshal Archive” is a proprietary archive file format that supports data compression, error recovery and file spanning.",
        heading: "What is RAR and How to Extract it?",
        long: "It was developed in 1993 by Russian software engineer Eugene Roshal and the software is licensed by win.rar GmbH. The name RAR stands for Roshal Archive.",
      };
    case "zip":
      return {
        short:
          "ZIP is an archive file format that supports lossless data compression.",
        heading: "What is ZIP and How to Extract it?",
        long: "ZIP is an archive file format that supports lossless data compression. A ZIP file may contain one or more files or directories that may have been compressed. The ZIP file format permits a number of compression algorithms, though DEFLATE is the most common.",
      };
    case "dll":
      return {
        short:
          "Dynamic-link library (DLL) is Microsoft's implementation of the shared library concept in the Microsoft Windows and OS/2 operating systems.",
        heading: "What is DLL?",
        long: "Since DLLs are essentially the same as EXEs, the choice of which to produce as part of the linking process is for clarity, since it is possible to export functions and data from either. It is not possible to directly execute a DLL, since it requires an EXE for the operating system to load it through an entry point,",
      };
    case "7z":
      return {
        short:
          "7z is a compressed archive file format that supports lossless data compression.",
        heading: "What is 7z?",
        long: "7z supports several different data compression, encryption and pre-processing algorithms. The 7z format initially appeared as implemented by the 7-Zip archiver.",
      };

    default:
      return {
        short: "Unknown file type",
        long: "The file type is unknown, You can still download and use this file.",
      };
  }
};
export default fileDescriptionIdentifier;
