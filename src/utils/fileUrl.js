// Los PDFs están en public/ y Vite los copia a la raíz de dist/.
// BASE_URL es '/' (la web se sirve desde la raíz de transaludes.isciii.es).
const fileUrl = (file) => `${import.meta.env.BASE_URL}${file}`;

export default fileUrl;
