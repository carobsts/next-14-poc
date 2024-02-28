export const API_TOKEN = `https://accounts.spotify.com/api/token`;
export const searchApiWeb = (searchTerm: any) => `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=track&offset=0&limit=5`; 
export const trackApiWeb = (trackId: any) => `https://api.spotify.com/v1/tracks/${trackId}`;
