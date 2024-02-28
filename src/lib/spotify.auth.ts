import { API_TOKEN } from "@/lib/endpoints";
import { NO_ACCESS_DATA, UNEXPECTED_ERROR } from "@/lib/messages";
import { NextResponse } from "next/server";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const base64Credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
  "base64"
);

export default async function getSpotifyAccessToken() {
  try {
    const response = await fetch(`${API_TOKEN}`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    if (!response.ok) {
      throw new Error(
        `Spotify API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    if (!data.access_token) {
      throw new Error(NO_ACCESS_DATA);
    }
    return data.access_token;
  } catch (error: any) {
    NextResponse.json({ error: error.message || UNEXPECTED_ERROR });
  }
}
