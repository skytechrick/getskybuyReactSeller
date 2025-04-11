export const sellerBackendImage = (image) => {
    const domian = import.meta.env.VITE_SELLER_BACKEND;

    if (image) {
        return `${domian}/profile-images/${image}`;
    
    }
    return null;

}