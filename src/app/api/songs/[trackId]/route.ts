import getSpotifyAccessToken from "@/lib/spotify.auth";
import { trackApiWeb } from "@/lib/endpoints";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { trackId: string } }
) {
  const trackId = params.trackId;

  if (!trackId) {
    return new NextResponse(JSON.stringify({ error: "Track ID is required" }), {
      status: 400,
    });
  }

  try {
    const token = await getSpotifyAccessToken();
    if (!token) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to obtain access token" }),
        { status: 401 }
      );
    }

    const spotifyResponse = await fetch(trackApiWeb(trackId), {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!spotifyResponse.ok) {
      return new NextResponse(
        JSON.stringify({
          error: `Spotify API error: ${spotifyResponse.status}`,
        }),
        { status: spotifyResponse.status }
      );
    }

    const data = await spotifyResponse.json();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
