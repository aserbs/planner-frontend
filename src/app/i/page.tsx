import { Heading } from "@/components/ui/Heading";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import type { Metadata } from "next";
import { Statistics } from "./Statistics";


export const metadata: Metadata = {
    title: 'Dashbord',
    ...NO_INDEX_PAGE
}

export default function DashboardPage() {
    return <div>
        <Heading title="Statistics" />
        <Statistics />
    </div>
}