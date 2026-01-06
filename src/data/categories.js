/**
 * Game Categories Configuration
 */
export const categories = [
    {
        id: 'hot',
        name: '🔥 Hot',
        description: 'Intimidad Extrema - Acción, cama y fantasías explícitas',
        color: '#FF4757',
        gradient: 'linear-gradient(135deg, #FF4757 0%, #FF6348 100%)'
    },
    {
        id: 'spicy',
        name: '😈 Spicy',
        description: 'Atrevido / Coqueto - Tensión sexual y verdades picantes',
        color: '#F5576C',
        gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)'
    },
    {
        id: 'lifestyle',
        name: '❤️ Lifestyle',
        description: 'Vida en Pareja - Dinámica de relación y convivencia',
        color: '#E74C3C',
        gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)'
    },
    {
        id: 'fun',
        name: '🤣 Fun',
        description: 'Humor y Torpeza - Situaciones graciosas y errores',
        color: '#FFA502',
        gradient: 'linear-gradient(135deg, #FFA502 0%, #FFCA3A 100%)'
    }
];

export const getCategoryById = (id) => {
    return categories.find(cat => cat.id === id);
};
