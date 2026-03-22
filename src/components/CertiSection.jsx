import { useState } from "react";
import { ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";


const certi =[
    {
        id: 1,
        title: "AWS Cloud Practitioner Essentials",
        description: "This certificate confirms foundational knowledge of cloud computing concepts and core AWS services.",
        Image: "../images/certifications/Feb2026-AWS-CloudPractioner-AWSCloudPractionerEssentials.png",
        demoUrl: null,
        category: "☁️ Cloud"
    }, {
        id: 2,
        title: "MySQL Bootcamp",
        description: "Comprehensive introduction to MySQL, covering SQL fundamentals, data analysis, joins, and real-world querying to extract insights from data.",
        Image: "../images/certifications/Mar2026-Udemy-MySQL_Bootcamp.png",
        demoUrl: "https://ude.my/UC-822c8861-5f5c-4a97-b4ed-40a792f04729",
        category: "🗄️ SQL"
    }, {
        id: 3,
        title: "SQL (Basic) Certification",
        description: "Foundational knowledge of SQL, including querying, data filtering, joins, and basic data manipulation.",
        Image: "../images/certifications/Mar2026-HackerRank-SQLBasicCertification.png",
        demoUrl: "https://www.hackerrank.com/certificates/iframe/7325ca564bd5",
        category: "🗄️ SQL"
    }, {
        id: 4,
        title: "Advanced English Communication Certification (B2+)",
        description: "Certification verifying B2+ (Upper-Intermediate) English proficiency, with demonstrated strengths in listening (C1) and solid performance across reading, speaking, and overall communication skills. Valid through March 2027.",
        Image: "../images/certifications/Mar2026-BELT-IdiomaInternacional(English).png",
        demoUrl: "https://belt.idiomacr.com/#/certificate_verification/480309cc084c1992",
        category: "🌍 English"
    }, {
        id: 5,
        title: "ETC Certificate – CEFR C1 (Advanced English)",
        description: "Awarded by ETC International College, this certificate validates advanced English proficiency at the CEFR C1 level.",
        Image: "../images/certifications/ETCInternationalCollege.png",
        demoUrl: null,
        category: "🌍 English"
    },{
        id: 6,
        title: "Cloud Computing Fundamentals",
        description: "Solid understanding of core cloud concepts, service models, deployment models, virtualization, and the foundational principles behind modern cloud architectures.",
        Image: "../images/certifications/IBMCCF.png",
        demoUrl: "https://www.credly.com/badges/3af70445-30b7-47af-ae34-83279959a2f8/public_url",
        category: "☁️ Cloud"
    }, {
        id: 7,
        title: "Amazon CloudWatch",
        description: "Foundational knowledge in monitoring AWS resources, creating dashboards, setting alarms, and analyzing logs and metrics to improve application observability and performance.",
        Image: "../images/certifications/CloudWatch.png",
        demoUrl: null,
        category: "☁️ Cloud"
    }, {
        id: 8,
        title: "Job Roles in the Cloud",
        description: "Cloud career paths, responsibilities across cloud engineering, operations, security, architecture, and the essential skills required to work effectively in cloud environments.",
        Image: "../images/certifications/JobRoles.png",
        demoUrl: null,
        category: "☁️ Cloud"
    }, {
        id: 9,
        title: "AWS Certified Cloud Practitioner Domain 1 Practice",
        description: "Practical understanding of AWS core concepts, including the AWS global infrastructure, the Shared Responsibility Model, basic cloud economics, high availability and fault tolerance principles.",
        Image: "../images/certifications/Feb2026-AWS-CloudPractioner-Domain1Practice.png",
        demoUrl: null,
        category: "☁️ Cloud"
    }, {
        id: 10,
        title: "AWS Cloud Practitioner – Security & Compliance Review",
        description: "Practical knowledge of AWS security fundamentals, Identity and Access Management (IAM) policies and roles, the Shared Responsibility Model, data protection mechanisms, AWS compliance programs and core security services such as IAM, AWS Shield and AWS CloudTrail.",
        Image: "../images/certifications/Feb2026-AWS-CloudPractioner-Domain2Review.png",
        demoUrl: null,
        category: "☁️ Cloud"
    }, {
        id: 11,
        title: "AWS Cloud Practitioner – Cloud Technology & Services Practice",
        description: "Practical knowledge of AWS core services, including compute, storage, networking, databases, and security services. Understanding of service configurations and best practices for deploying scalable and secure applications in AWS.",
        Image: "../images/certifications/Feb2026-AWS-CloudPractioner-Domain3Practice.png",
        demoUrl: null,
        category: "☁️ Cloud"
    }, {
        id: 12,
        title: "AWS Cloud Practitioner – Core AWS Services Review",
        description: "This review reinforces practical knowledge of core AWS services, including compute (Amazon EC2, AWS Lambda), storage (Amazon S3, EBS), databases (Amazon RDS, DynamoDB), and networking (Amazon VPC).",
        Image: "../images/certifications/Feb2026-AWS-CloudPractioner-Domain3Review.png",
        demoUrl: null,
        category: "☁️ Cloud"
    }, {
        id: 13,
        title: "AWS Cloud Practitioner – Exam Preparation Overview",
        description: "This training consolidates knowledge across all exam domains, including cloud concepts, security and compliance, core AWS services, billing, and pricing models.",
        Image: "../images/certifications/Feb2026-AWS-CloudPractioner-ExamPrepOverview.png",
        demoUrl: null,
        category: "☁️ Cloud"
    }, {
        id: 14,
        title: "AWS Cloud Practitioner – Exam Preparation Plan Overview",
        description: "This module outlines a structured study strategy covering all exam domains, including cloud concepts, security and compliance, core AWS services, and billing and pricing.",
        Image: "../images/certifications/Feb2026-AWS-CloudPractioner-ExamPrepPlanOverview.png",
        demoUrl: null,
        category: "☁️ Cloud"
    }
];

const categories = ["All", "☁️ Cloud", "🌍 English", "🗄️ SQL"];

export const CertiSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = certi.filter((certi) => activeCategory === "All" || certi.category === activeCategory);

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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center"> Degrees & Certifications</h2>

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
                                    {certi.demoUrl && (
                                    <a href={certi.demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLinkIcon className="w-5 h-5 hover:text-primary/80" size={20}/>
                                    </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
};
