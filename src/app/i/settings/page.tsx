import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import { Settings } from "./Settings";
import { Heading } from "@/components/ui/Heading";

export const metadata: Metadata = {
    title: 'Settings',
    ...NO_INDEX_PAGE,
}

export default function Page() {
    return <div>
        <Heading title='Settings' />
        <Settings />
    </div>
}