import { contentfulClientCS } from "@/utils/contentful/contentfulClient";
import { NextApiRequest, NextApiResponse } from "next";

const fetchAspiration = async (req: NextApiRequest, res: NextApiResponse) => {
    const aspiration = await contentfulClientCS.getEntries({
        content_type: "aspiration",
    });
        
    res.status(200).json(aspiration);
}