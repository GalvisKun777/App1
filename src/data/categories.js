/**
 * Game Categories Configuration
 */
export const categories = [
    {
        id: 'hot',
        name: '🔥 Picante',
        description: 'Preguntas atrevidas y calientes',
        color: '#FF4757',
        gradient: 'linear-gradient(135deg, #FF4757 0%, #FF6348 100%)'
    },
    {
        id: 'funny',
        name: '😂 Divertido',
        description: 'Preguntas graciosas y disparatadas',
        color: '#FFA502',
        gradient: 'linear-gradient(135deg, #FFA502 0%, #FFCA3A 100%)'
    },
    {
        id: 'party',
        name: '🎉 Fiesta',
        description: 'Preguntas para animar la reunión',
        color: '#5F27CD',
        gradient: 'linear-gradient(135deg, #5F27CD 0%, #8B5CF6 100%)'
    },
    {
        id: 'deep',
        name: '💭 Profundo',
        description: 'Preguntas para conocerse mejor',
        color: '#0ABDE3',
        gradient: 'linear-gradient(135deg, #0ABDE3 0%, #48DBF8 100%)'
    }
];

export const getCategoryById = (id) => {
    return categories.find(cat => cat.id === id);
};
