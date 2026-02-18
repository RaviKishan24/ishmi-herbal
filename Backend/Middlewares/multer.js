// import multer from "multer";
// import path from "path";


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === "image/jpeg" ||
//         file.mimetype === "image/png" ||
//         file.mimetype === "image/jpg" // MIME-->Multipurpose Internet Mail Extensions, a standard for classifying file formats on the Internet 
//         // //,It typically consists of a type and a subtype, separated by a slash (e.g., image/jpeg, text/plain, application/pdf). 
//         //  This allows applications to correctly interpret the data, display it, or
//         //  launch the appropriate handler (e.g., a PDF viewer for an application/pdf file).  
//     ) {
//         cb(null, true)
//     } else {
//         cb(new Error("Only Images are allowed as profile pics"), false)
//     }
// }

// const upload = multer({
//     storage,
//     fileFilter,
//     limits: {
//         fileSize: 5 * 1024 * 1024
//     } // it limit the file size at most 5MB ,Prevents large uploads
// })

// export default upload;