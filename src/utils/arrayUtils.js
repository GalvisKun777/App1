/**
 * Fisher-Yates Shuffle Algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} - Shuffled array
 */
export const shuffle = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

/**
 * Determine winner(s) from votes
 * @param {Array} votes - Array of vote objects {voter, votedFor}
 * @returns {Array} - Array of winner names (can be multiple in case of tie)
 */
export const getWinners = (votes) => {
    if (!votes || votes.length === 0) return [];

    // Count votes per player
    const voteCounts = {};
    votes.forEach(vote => {
        if (vote.votedFor) {
            voteCounts[vote.votedFor] = (voteCounts[vote.votedFor] || 0) + 1;
        }
    });

    // Find max votes
    const maxVotes = Math.max(...Object.values(voteCounts));

    // Return all players with max votes (handles ties)
    return Object.entries(voteCounts)
        .filter(([_, count]) => count === maxVotes)
        .map(([player, _]) => player);
};

/**
 * Get vote breakdown for display
 * @param {Array} votes - Array of vote objects
 * @returns {Object} - Object with player names as keys and vote counts as values
 */
export const getVoteBreakdown = (votes) => {
    const breakdown = {};
    votes.forEach(vote => {
        if (vote.votedFor) {
            breakdown[vote.votedFor] = (breakdown[vote.votedFor] || 0) + 1;
        }
    });
    return breakdown;
};
