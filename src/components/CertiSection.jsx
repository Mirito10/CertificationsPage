import { useState } from "react";
import { ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";



const certi =[
    {
        id: 1,
        title: "Amazon CloudWatch",
        description: "Foundational knowledge in monitoring AWS resources, creating dashboards, setting alarms, and analyzing logs and metrics to improve application observability and performance.",
        Image: "../images/certifications/CloudWatch.png",
        demoUrl: "",
        category: "Cloud"
    }, {
        id: 2,
        title: "Cloud Computing Fundamentals",
        description: "Solid understanding of core cloud concepts, service models, deployment models, virtualization, and the foundational principles behind modern cloud architectures.",
        Image: "../images/certifications/IBMCCF.png",
        demoUrl: "https://www.credly.com/badges/3af70445-30b7-47af-ae34-83279959a2f8/public_url",
        category: "Cloud"
    }, {
        id: 3,
        title: "Job Roles in the Cloud",
        description: "Cloud career paths, responsibilities across cloud engineering, operations, security, architecture, and the essential skills required to work effectively in cloud environments.",
        Image: "../images/certifications/JobRoles.png",
        demoUrl: "",
        category: "Cloud"
    }
];

const categories = ["all", "Cloud"];

export const CertiSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = certi.filter((certi) => activeCategory === "all" || certi.category === activeCategory);

    return <section id="certis" className="py-24 px-4 relative">

        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
                 <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>
                    {category}
                </button>
            ))}
        </div>

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center"> Certifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {filteredSkills.map((certi, key) => (

                    <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">

                        <div className="h-48 overflow-hidden">
                            <img src={certi.Image} alt={certi.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">

                            <h3 className="text-xl font-semibold mb-1"> {certi.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4"> {certi.description} </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={certi.demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLinkIcon className="w-5 h-5 hover:text-primary/80" size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
};
