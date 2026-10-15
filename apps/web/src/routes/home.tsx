import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import HomePage from '@/components/HomePage';

export function meta({ matches, location }: Route.MetaArgs) {
    return seo({ matches, location }, {
        title: 'Vinayak Singh — AI/ML & Full Stack Developer',
        description:
            "Vinayak Singh is a computer science student who builds AI systems end to end. Creator of Odin (on-premise agentic AI for refineries) and Nudge (Flutter & Gemini app).",
        image:
            'https://horizons-cdn.hostinger.com/2a6a1fdc-01af-4c93-a43b-6c1f779f6259/cc94b61a0a1611d7099f7100cef28a8a.jpg',
    });
}

export default function Home() {
    return <HomePage />;
}
