"use client";

import QuestionForm from "@/components/QuestionForm";
import { useAuthStore } from "@/store/Auth";
import slugify from "@/utils/slugify";
import { Models } from "appwrite";
import { useRouter } from "next/navigation";
import React from "react";

const EditQues = ({ question }: { question: Models.Document }) => {
    const { user } = useAuthStore();
    const router = useRouter();

    React.useEffect(() => {
        if (question.authorId !== user?.$id) {
            router.push(`/questions/${question.$id}/${slugify(question.title)}`);
        }
    }, []);

    if (user?.$id !== question.authorId) return null;

    return (
        <div className="block pb-20 pt-32">
            <div className="container mx-auto px-4">
                <h1 className="mb-10 mt-4 text-2xl">Edit your public question</h1>

                <div className="flex flex-wrap md:flex-row-reverse">
                    <div className="w-full md:w-1/3"></div>
                    <div className="w-full md:w-2/3">
                        <QuestionForm question={question} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditQues;


// pages/questions/edit/[id].tsx

// "use client";

// import { useRouter } from "next/navigation";
// import { storage, databases } from "@/models/client/config";
// import { db, questionCollection, questionAttachmentBucket } from "@/models/name";
// import { ID } from "appwrite";
// import { useAuthStore } from "@/store/Auth";
// import { useEffect, useState } from "react";
// import QuestionForm from "@/components/QuestionForm";

// const EditQuestion = ({ params }: { params: { id: string } }) => {
//     const router = useRouter();
//     const { user } = useAuthStore();
//     const [question, setQuestion] = useState<any | null>(null);

//     useEffect(() => {
//         const fetchQuestion = async () => {
//             try {
//                 const response = await databases.getDocument(db, questionCollection, params.id);
//                 setQuestion(response);
//             } catch (error) {
//                 console.error("Error fetching question:", error);
//             }
//         };
//         fetchQuestion();
//     }, [params.id]);

//     const handleSubmit = async (formData: any) => {
//         if (!question) return;

//         // If new attachment is uploaded, create a new file in storage
//         const attachmentId = formData.attachment
//             ? await storage.createFile(questionAttachmentBucket, ID.unique(), formData.attachment)
//             : question.attachmentId; // Otherwise, use the existing attachment ID

//         try {
//             const updatedQuestion = await databases.updateDocument(db, questionCollection, question.$id, {
//                 title: formData.title,
//                 content: formData.content,
//                 authorId: formData.authorId,
//                 tags: Array.from(formData.tags),
//                 attachmentId: attachmentId,
//             });

//             router.push(`/questions/${updatedQuestion.$id}`);
//         } catch (error) {
//             console.error("Error updating question:", error);
//         }
//     };

//     if (!question) return <div>Loading...</div>;

//     return (
//         <div>
//             <h1>Edit Question</h1>
//             <QuestionForm question={question} onSubmit={handleSubmit} />
//         </div>
//     );
// };

// export default EditQuestion;
