interface ImageModule {
    default: string;
}

// Función para importar todas las imágenes de un directorio específico
export const importAllImages = async () => {
    const imageContext = import.meta.glob<ImageModule>('../assets/images_background/*.{png,jpg,jpeg,svg}');
    const imageKeys = Object.keys(imageContext);
    const images = await Promise.all(imageKeys.map(key => imageContext[key]()));
    return images.map((module) => module.default);
};