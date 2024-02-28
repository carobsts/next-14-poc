// import { NextResponse } from "next/server";
// import { searchApiWeb, trackApiWeb } from "@/lib/endpoints";
// import getSpotifyAccessToken from "@/lib/spotify.auth";

// export async function search(searchTerm: string) {
//   const token = await getSpotifyAccessToken();
//   let spotifyResponse;
//   if (token && searchTerm) {
//     spotifyResponse = await fetch(
//       searchApiWeb(searchTerm),
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   }
//   const data = await spotifyResponse?.json();
//   return NextResponse.json({ data });
// };

// export async function getTrack(trackId: string) {
//   const token = await getSpotifyAccessToken();
//   let response;
//   if (token && trackId) {
//     response = await fetch(
//       trackApiWeb(trackId),
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   };
//   const data = await response?.json();
//   return NextResponse.json({ data });
// };

import { NextApiRequest, NextApiResponse } from 'next';
import { searchApiWeb } from "@/lib/endpoints";
import getSpotifyAccessToken from "@/lib/spotify.auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { searchTerm } = req.query;

  try {
    const token = await getSpotifyAccessToken();
    if (!token || !searchTerm) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    const response = await fetch(searchApiWeb(searchTerm), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
