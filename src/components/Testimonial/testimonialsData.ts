import { FaUser, FaCode, FaStar } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface TestimonialData {
    role: string;
    icon: IconType;
    iconBg: string;
    rating: number;
    text: string;
    company: string;
}

export const testimonialsData: TestimonialData[] = [
    {
        role: "Product Designer",
        icon: FaUser,
        iconBg: "#067589",
        rating: 5,
        text: "OSIG makes it easy to generate high-quality visuals without worrying about data storage or logs.",
        company: "OSIG"
    },
    {
        role: "Software Developer",
        icon: FaCode,
        iconBg: "#8b5cf6",
        rating: 5,
        text: "Finally, an AI tool that respects user privacy. Smooth workflow and reliable performance.",
        company: "OSIG"
    },
    {
        role: "UX Researcher",
        icon: FaStar,
        iconBg: "#067589",
        rating: 5,
        text: "A minimal and efficient experience. The encryption model gives total peace of mind.",
        company: "OSIG"
    },

    {
        role: "Software Developer",
        icon: FaCode,
        iconBg: "#8b5cf6",
        rating: 5,
        text: "Finally, an AI tool that respects user privacy. Smooth workflow and reliable performance.",
        company: "OSIG"
    },
    {
        role: "UX Researcher",
        icon: FaStar,
        iconBg: "#067589",
        rating: 5,
        text: "A minimal and efficient experience. The encryption model gives total peace of mind.",
        company: "OSIG"
    }
];
