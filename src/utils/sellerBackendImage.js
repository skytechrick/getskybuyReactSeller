export const sellerBackendImage = (image) => {
    const domian = import.meta.env.VITE_SELLER_BACKEND;

    if (image) {
        return `${domian}/profile-images/${image}`;
    
    }
    return null;

}
export const sellerBusinessBackendImage = (image) => {
    const domian = import.meta.env.VITE_SELLER_BACKEND;

    if (image) {
        return `${domian}/business-images/${image}`;
    
    }
    return null;

}