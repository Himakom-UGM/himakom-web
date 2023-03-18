import { AspirationType } from "@/utils/contentful/contentfulTypes";
import { Entry } from "contentful";
import AspirationCard from "./AspirationCard";

export default function AspirationsDesktop({filteredEntries} : {filteredEntries: Entry<AspirationType>[]}){
    return(
        <div className="  mx-20 mt-16 grid grid-cols-4 gap-8 text-primary-100  ">
							{filteredEntries.map((entry) => (
								<AspirationCard
									key={entry.sys.id}
									subject={entry.fields.subject}
									from={entry.fields.from ? entry.fields.from : 'Anonymous'}
									to={entry.fields.to}
								/>
							))}
						</div>
    )
}