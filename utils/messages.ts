export interface MessageFlow {
  id: string;
  trigger: string[];
  response: string;
  tone: 'marketplace' | 'kingdom';
}

export const messageFlows: MessageFlow[] = [
  {
    id: 'pricing-kingdom',
    trigger: ['pricing', 'cost', 'price', 'how much'],
    response: "Our Kingdom Studios packages start at $997 for the basic setup, going up to $2,997 for the full enterprise solution. Each package includes our signature Kingdom branding, custom animations, and dedicated support. What's your budget range?",
    tone: 'kingdom'
  },
  {
    id: 'pricing-marketplace',
    trigger: ['pricing', 'cost', 'price', 'how much'],
    response: "Our competitive pricing starts at $497 for the starter package, with premium options at $1,497. We offer flexible payment plans and volume discounts for larger teams. What's your budget?",
    tone: 'marketplace'
  },
  {
    id: 'demo-kingdom',
    trigger: ['demo', 'show', 'example', 'portfolio'],
    response: "Absolutely! I'd love to show you our Kingdom Studios magic. We create stunning visual experiences that transform your brand into something truly royal. Would you like to see some of our recent Kingdom projects?",
    tone: 'kingdom'
  },
  {
    id: 'demo-marketplace',
    trigger: ['demo', 'show', 'example', 'portfolio'],
    response: "I'd be happy to show you our portfolio! We have case studies from various industries showing 40% average conversion improvements. Would you like to see some specific examples?",
    tone: 'marketplace'
  },
  {
    id: 'features-kingdom',
    trigger: ['features', 'what', 'include', 'offer'],
    response: "Kingdom Studios delivers premium features: custom Kingdom animations, royal color schemes, exclusive fonts, 24/7 Kingdom support, and our signature 'crown' effect. We make your brand feel like royalty!",
    tone: 'kingdom'
  },
  {
    id: 'features-marketplace',
    trigger: ['features', 'what', 'include', 'offer'],
    response: "Our platform includes advanced analytics, A/B testing tools, customizable templates, integration with major CRMs, and dedicated account management. Plus, we offer comprehensive training and support.",
    tone: 'marketplace'
  },
  {
    id: 'support-kingdom',
    trigger: ['support', 'help', 'assistance'],
    response: "Our Kingdom support team is available 24/7 to ensure your royal experience is flawless. We provide dedicated account managers and priority response times for all Kingdom clients.",
    tone: 'kingdom'
  },
  {
    id: 'support-marketplace',
    trigger: ['support', 'help', 'assistance'],
    response: "We offer comprehensive support including live chat, email support, and dedicated account management. Our average response time is under 2 hours during business hours.",
    tone: 'marketplace'
  }
];

export const getResponseForInput = (input: string, tone: 'marketplace' | 'kingdom'): string => {
  const lowerInput = input.toLowerCase();
  
  // Find matching flow
  const matchingFlow = messageFlows.find(flow => 
    flow.tone === tone && flow.trigger.some(trigger => lowerInput.includes(trigger))
  );
  
  if (matchingFlow) {
    return matchingFlow.response;
  }
  
  // Default responses
  return tone === 'kingdom' 
    ? "That's a great question! In the Kingdom Studios world, we believe every brand deserves to feel like royalty. Let me know more about your specific needs and I'll craft the perfect Kingdom solution for you."
    : "Great question! Our platform is designed to maximize your ROI with proven conversion strategies. Tell me more about your specific use case and I'll show you exactly how we can help.";
};

export const getWelcomeMessage = (tone: 'marketplace' | 'kingdom'): string => {
  return tone === 'kingdom'
    ? "Hey! I'm your Kingdom Studios sales assistant. I can help you with product demos, pricing, and closing deals. What can I help you with today?"
    : "Hello! I'm your sales assistant. I can help you with product demos, pricing, and closing deals. What can I help you with today?";
}; 