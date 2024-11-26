
"use client"
import '../assets/css/main.css'
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
function Card({ service }) {
    return (
        <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
            
        >
            <div className="service-item item-teal position-relative" style={{listStyle:'none',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <div className="mb-4" >{service.icon}</div>
                <h3>{service.title}</h3>
                <p>
                {service.description}
                </p>
                <div >
                {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3" style={{display:'flex',width:'300px'}}>
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" style={{width:'20%'}} />
                        <span className="text-gray-600" style={{width:'80%', display:'flex',justifyContent:'flex-start'}}>{feature}</span>
                    </li>
                ))}
                </div>
            </div>
        </div>
    );
}



export default Card