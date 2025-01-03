// import React from "react";
// import { HeroParallax } from "@/components/ui/hero-parallax";
// import { databases } from "@/models/server/config";
// import { db, questionAttachmentBucket, questionCollection } from "@/models/name";
// import { Query } from "node-appwrite";
// import slugify from "@/utils/slugify";
// import { storage } from "@/models/client/config";
// import HeroSectionHeader from "./HeroSectionHeader";

// export default async function HeroSection() {
//     const questions = await databases.listDocuments(db, questionCollection, [
//         Query.orderDesc("$createdAt"),
//         Query.limit(15),
//     ]);

//     const products = await Promise.all(
//         questions.documents.map(async (q) => {
//             let thumbnail = '/images/placeholder.png'; // Default thumbnail
//             if (q.attachmentId) {
//                 try {
//                     thumbnail = storage.getFilePreview(questionAttachmentBucket, q.attachmentId).href;
//                 } catch (error) {
//                     console.warn(`Thumbnail fetch failed for document ID: ${q.$id}`, error);
//                 }
//             }
//             return {
//                 title: q.title,
//                 link: `/questions/${q.$id}/${slugify(q.title)}`,
//                 thumbnail,
//             };
//         })
//     );

//     return <HeroParallax header={<HeroSectionHeader />} products={products} />;
// }

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import HeroSectionHeader from "./HeroSectionHeader";

export default function HeroSection() {
    const products = [
        {
            title: "AI Revolution",
            link: "/questions",
            thumbnail: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // AI-related image
        },
        {
            title: "Data Analysis",
            link: "/questions",
            thumbnail: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Data-related image
        },
        {
            title: "Cloud Computing",
            link: "/questions",
            thumbnail: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=600", // Cloud image
        },
        {
            title: "Cybersecurity",
            link: "/questions",
            thumbnail: "https://images.pexels.com/photos/3945682/pexels-photo-3945682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Cybersecurity image
        },
        {
            title: "Quantum Computing",
            link: "/questions",
            thumbnail: "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Quantum computing image
        },
        {
            title: "AI Revolution",
            link: "/questions",
            thumbnail: "https://images.pexels.com/photos/5380589/pexels-photo-5380589.jpeg?auto=compress&cs=tinysrgb&w=600", // AI-related image
        },
        {
            title: "Ethical Hacking",
            link: "/questions",
            thumbnail: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Data-related image
        },
        {
            title: "Machine Learning",
            link: "/questions",
            thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600", // Cloud image
        },
        {
            title: "Data Robots",
            link: "/questions",
            thumbnail: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=600", // Cybersecurity image
        },
        {
            title: "Humanoid",
            link: "/questions",
            thumbnail: "https://images.pexels.com/photos/4389986/pexels-photo-4389986.jpeg?auto=compress&cs=tinysrgb&w=600", // Quantum computing image
        },
    ];

    return <HeroParallax header={<HeroSectionHeader />} products={products} />;
}
