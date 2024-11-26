"use client"
import {
    ArrowRight,
    Mail,
    CheckCircle2,
    Building2,
    Brain,
    Cloud,
    Shield,
    Layers,
    GitBranch,
    LineChart,
    Users,
    Repeat,
    Sparkles,
    BarChart
  } from 'lucide-react';
export const deliveryModels = [
    {
      title: "POD-Based Delivery",
      description: "Dedicated product-oriented delivery teams",
      features: [
        "Cross-functional product teams",
        "Clear ownership & accountability",
        "Rapid iteration cycles",
        "Continuous delivery pipeline"
      ],
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Agile Methodology",
      description: "Flexible and adaptive implementation approach",
      features: [
        "Sprint-based execution",
        "Regular value delivery",
        "Iterative improvement",
        "Adaptive planning"
      ],
      icon: <Repeat className="h-6 w-6 text-green-600" />
    },
    {
      title: "Quality-First Approach",
      description: "Ensuring excellence in every delivery",
      features: [
        "Automated testing strategy",
        "DevSecOps practices",
        "Code quality standards",
        "Performance monitoring"
      ],
      icon: <Shield className="h-6 w-6 text-purple-600" />
    }
  ];

  export const engagementModels = [
    {
      title: "Strategic Advisory",
      description: "Expert CTO guidance and strategic planning",
      features: [
        "Technology strategy development",
        "Architecture review & guidance",
        "Monthly strategy sessions",
        "On-demand consultations"
      ],
      pricing: "Part-time engagement",
      icon: <Brain className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Project-Based",
      description: "Focused engagement for specific initiatives",
      features: [
        "Defined scope & deliverables",
        "Dedicated POD allocation",
        "Fixed timeline & milestones",
        "Clear success metrics"
      ],
      pricing: "Project-based pricing",
      icon: <GitBranch className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Transformation Partner",
      description: "Comprehensive digital transformation support",
      features: [
        "Full digital strategy",
        "Multiple POD coordination",
        "Technology modernization",
        "Change management"
      ],
      pricing: "Custom engagement",
      icon: <Sparkles className="h-6 w-6 text-green-600" />
    }
  ];

  export const coreServices = [
    {
      title: "Strategic Technology Leadership",
      description: "Expert CTO guidance for digital transformation and innovation",
      features: [
        "Technology roadmap development",
        "Digital transformation strategy",
        "Technology vendor assessment",
        "Architecture governance"
      ],
      icon: <Layers className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Enterprise Architecture",
      description: "Design scalable, future-proof technology ecosystems",
      features: [
        "Architecture framework design",
        "System integration strategy",
        "Cloud migration planning",
        "Technology standardization"
      ],
      icon: <Building2 className="h-6 w-6 text-purple-600" />
    }
  ];

 export const specializedServices = [
    {
      title: "Generative AI Services",
      description: "Transform operations with enterprise-grade AI solutions",
      features: [
        "Large Language Model Integration",
        "Custom AI Assistant Development",
        "RAG Architecture Implementation",
        "AI Governance Framework"
      ],
      icon: <Brain className="h-6 w-6 text-green-600" />
    },
    {
      title: "Data & Advanced Analytics",
      description: "Build data-driven decision-making capabilities",
      features: [
        "Data Strategy & Architecture",
        "BI Platform Implementation",
        "Advanced Analytics Solutions",
        "Data Mesh Architecture"
      ],
      icon: <BarChart className="h-6 w-6 text-orange-600" />
    }
  ];