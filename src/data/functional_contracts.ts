import { Contract } from "../model/contracts/Contract";
import { Industry } from "../model/contracts/Industry";

export const functional_contracts: Contract[] = [
    {
        name: { en: "Landing page" },
        photoSrc: "landing.jpg",
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 1,
            organization: 0,
            creativity: 3,
        },
        sector: Industry.BUREAUCRACY,
        storyPoints: 3,
    },

    {
        name: { en: "User Authentication" },
        photoSrc: "auth.jpg",
        flavorText: { en: "Implement secure login and registration functionalities." },
        text: {},
        requiredSkills: {
            knowledge: 5,
            organization: 2,
            creativity: 2,
        },
        storyPoints: 5,
    },
    {
        name: { en: "Database Setup" },
        photoSrc: "db.jpg",
        flavorText: { en: "Design and implement the database schema." },
        text: {},
        requiredSkills: {
            knowledge: 6,
            organization: 3,
            creativity: 1,
        },
        storyPoints: 6,
    },
    {
        name: { en: "API Integration" },
        photoSrc: "api.jpg",
        flavorText: { en: "Integrate third-party APIs to extend functionality." },
        text: {},
        requiredSkills: {
            knowledge: 4,
            organization: 3,
            creativity: 2,
        },
        storyPoints: 4,
    },
    {
        name: { en: "Responsive Design" },
        photoSrc: "responsive.jpg",
        flavorText: { en: "Ensure the application is usable on all devices." },
        text: {},
        requiredSkills: {
            knowledge: 2,
            organization: 2,
            creativity: 4,
        },
        storyPoints: 3,
    },
    {
        name: { en: "Security Audit" },
        photoSrc: "pentest.jpg",
        flavorText: { en: "Identify and fix security vulnerabilities." },
        text: {},
        requiredSkills: {
            knowledge: 7,
            organization: 4,
            creativity: 2,
        },
        storyPoints: 7,
    },
    {
        name: { en: "Deployment Automation" },
        photoSrc: "automated_deployment.jpg",
        flavorText: { en: "Automate the deployment process for efficiency." },
        text: {},
        requiredSkills: {
            knowledge: 5,
            organization: 5,
            creativity: 3,
        },
        storyPoints: 5,
    },
    {
        name: { en: "Performance Optimization" },
        photoSrc: "optimization.jpg",
        flavorText: { en: "Improve the application's performance and scalability." },
        text: {},
        requiredSkills: {
            knowledge: 6,
            organization: 4,
            creativity: 3,
        },
        sector: Industry.IT,
        storyPoints: 6,
    },
    {
        name: { en: "User Analytics" },
        photoSrc: "user_analitycs.jpg",
        flavorText: { en: "Implement analytics to track user behavior." },
        text: {},
        requiredSkills: {
            knowledge: 3,
            organization: 2,
            creativity: 2,
        },
        storyPoints: 4,
    },
]
