import multer from "multer";

const storage = multer.memoryStorage(); // Mantém a imagem na RAM antes do envio
const upload = multer({ storage });

export default upload;
