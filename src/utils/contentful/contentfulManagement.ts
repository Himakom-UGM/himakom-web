import { createClient } from "contentful-management";

export const contentfulManagement = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
});