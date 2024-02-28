import { NextApiRequest, NextApiResponse } from 'next';
import getSpotifyAccessToken from '@/lib/spotify.auth';
import { trackApiWeb } from '@/lib/endpoints';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { trackId } = req.query;

  try {
    const token = await getSpotifyAccessToken();

    if (!token) {
      return res.status(401).json({ error: 'No se pudo obtener el token de acceso' });
    };

    const spotifyResponse = await fetch(trackApiWeb(trackId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!spotifyResponse.ok) {
      throw new Error(`Error de la API de Spotify: ${spotifyResponse.status}`);
    };

    const data = await spotifyResponse.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Error inesperado' });
  }
}