import { Metadata } from "next";

export const metadata = (title: string, description: string): Metadata => {
    return {
        title,
        description
    }
};