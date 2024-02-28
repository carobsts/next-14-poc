import { revalidatePath } from "next/cache";
import { paths } from "@/lib/paths";
import { ERROR_GETTING_TRACK, ERROR_SEARCHING_SONGS, HTTP_ERROR } from "@/lib/messages";

class SongsService {

    static async getSongs(searchTerm: any) {
        try {
            const response = await fetch(`${process.env.BASE_URL}/api/songs/search?searchTerm=${encodeURIComponent(searchTerm)}`);
            if (!response.ok) {
                throw new Error('Error in response API');
            };
            revalidatePath(paths.songs);
            const data = await response.json();
            if (data.data?.tracks?.items.length) {
                return data.data.tracks?.items.map((track: any) => ({
                    id: track.id,
                    name: track.name,
                    img: track.album.images[0].url,
                    duration: track.duration_ms,
                    artist: track.artists[0].name
                })
            )}
            else return [];
        } catch (error) {
            console.error(ERROR_SEARCHING_SONGS, error);
            throw error;
        };
    };

    static async getTack(trackId: string) {
        try {
            const response = await fetch(`${process.env.BASE_URL}/api/songs/${encodeURIComponent(trackId)}`);
            if (!response.ok) {
                throw new Error(HTTP_ERROR);
            };
            const data = await response.json();
            const track = data.album;
            if (track) {
                return {
                    name: track.name,
                    id: track.id,
                    type: track.type,
                    duration_ms: track.duration_ms,
                    artist: track.artists[0].name,
                    img: track.images[0].url
                }
            };
            return track;
        } catch (error) {
            console.error(ERROR_GETTING_TRACK, error);
            throw error;
        };
    }

}

export default SongsService;