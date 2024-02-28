import { searchApiWeb } from "@/lib/endpoints";
import getSpotifyAccessToken from "@/lib/spotify.auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchTerm = req.nextUrl.searchParams.get("searchTerm");

  if (!searchTerm) {
    return new NextResponse(JSON.stringify({ error: "Search Term is required" }), {
      status: 400,
    });
  }

  try {
    const token = await getSpotifyAccessToken();
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Invalid request" }), {
        status: 400,
      });
    }

    const response = await fetch(searchApiWeb(searchTerm), {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error(
        `Spotify API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return new NextResponse(JSON.stringify({ data }), { status: 200 });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
