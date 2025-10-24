export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
}

export const services: Service[] = [
  {
    slug: 'google-ads-management',
    title: 'Google Ads Management',
    short: 'Maximize ROI with data-driven Google Ads campaigns tailored to your business goals.',
    price: 'from $1,200/mo',
    features: [
      'Campaign strategy & setup',
      'Keyword research & optimization',
      'Ad copy testing & refinement',
      'Bid management & budget control',
      'Conversion tracking & reporting'
    ],
    contentHtml: `
      <h2>Professional Google Ads Management</h2>
      <p>Drive qualified traffic and maximize conversions with our comprehensive Google Ads management service. We combine strategic planning, continuous optimization, and transparent reporting to deliver measurable results.</p>
      
      <h3>Our Approach</h3>
      <p>Every campaign starts with thorough audience research and competitive analysis. We identify high-intent keywords, craft compelling ad copy, and structure campaigns for maximum quality score and minimum cost per acquisition.</p>
      
      <p>Our team monitors performance daily, adjusting bids, testing new ad variations, and refining targeting to ensure your budget works harder. We focus on metrics that matter: conversion rate, cost per lead, and return on ad spend.</p>
      
      <h3>What You Get</h3>
      <ul>
        <li>Strategic campaign architecture across Search, Display, and Shopping networks</li>
        <li>Continuous A/B testing of ad copy, landing pages, and targeting parameters</li>
        <li>Advanced audience segmentation and remarketing strategies</li>
        <li>Monthly performance reports with actionable insights</li>
        <li>Dedicated account manager and direct access to our team</li>
      </ul>
      
      <p>Whether you're launching your first campaign or scaling existing efforts, we bring the expertise to drive sustainable growth through Google Ads.</p>
    `
  },
  {
    slug: 'meta-ads-facebook-instagram',
    title: 'Meta Ads (Facebook & Instagram)',
    short: 'Engage your target audience across Facebook and Instagram with high-performing ad campaigns.',
    price: 'from $1,000/mo',
    features: [
      'Audience research & targeting',
      'Creative strategy & production',
      'Campaign optimization',
      'Pixel implementation & tracking',
      'Performance analysis & scaling'
    ],
    contentHtml: `
      <h2>Meta Ads Campaigns That Convert</h2>
      <p>Reach your ideal customers on Facebook and Instagram with campaigns designed for engagement and conversion. We leverage Meta's powerful targeting capabilities to connect your brand with users ready to take action.</p>
      
      <h3>Strategic Targeting</h3>
      <p>Success on Meta platforms starts with precise audience definition. We analyze your customer data, build custom and lookalike audiences, and test interest-based targeting to find the sweet spot between reach and relevance.</p>
      
      <p>Our creative team develops scroll-stopping visuals and persuasive copy that resonates with your audience. Every element is tested and optimized based on real performance data.</p>
      
      <h3>Full-Funnel Campaigns</h3>
      <ul>
        <li>Awareness campaigns to build brand recognition</li>
        <li>Consideration ads to nurture interest and engagement</li>
        <li>Conversion campaigns optimized for purchases, leads, or signups</li>
        <li>Retargeting sequences to re-engage warm audiences</li>
        <li>Dynamic product ads for e-commerce brands</li>
      </ul>
      
      <p>With proper pixel implementation, conversion tracking, and attribution modeling, we ensure every dollar spent is accounted for and optimized toward your business objectives.</p>
    `
  },
  {
    slug: 'conversion-rate-optimization',
    title: 'Conversion Rate Optimization (CRO)',
    short: 'Turn more visitors into customers with systematic testing and optimization.',
    price: 'from $1,500/mo',
    features: [
      'Website audit & analysis',
      'User behavior research',
      'A/B & multivariate testing',
      'Landing page optimization',
      'Funnel analysis & improvement'
    ],
    contentHtml: `
      <h2>Systematic Conversion Rate Optimization</h2>
      <p>Getting traffic is only half the battle. Our CRO service focuses on converting more of your existing visitors into paying customers through data-driven testing and optimization.</p>
      
      <h3>Research-Driven Process</h3>
      <p>We start by understanding your current funnel performance. Using analytics, heatmaps, session recordings, and user surveys, we identify friction points and opportunities for improvement.</p>
      
      <p>Our hypothesis-driven approach ensures we're testing changes that have the highest potential impact. Every test is properly designed, implemented, and measured to deliver statistically significant results.</p>
      
      <h3>Optimization Areas</h3>
      <ul>
        <li>Landing page design and messaging optimization</li>
        <li>Form field reduction and optimization</li>
        <li>Call-to-action placement and copy testing</li>
        <li>Page speed and mobile experience improvements</li>
        <li>Trust signals and social proof implementation</li>
        <li>Checkout process streamlining for e-commerce</li>
      </ul>
      
      <p>Small improvements compound over time. A 20% increase in conversion rate means 20% more customers from the same traffic investment. We help you capture that opportunity.</p>
    `
  },
  {
    slug: 'analytics-tracking-setup',
    title: 'Analytics & Tracking Setup',
    short: 'Get accurate data and insights with proper analytics implementation and tracking.',
    price: 'from $800/project',
    features: [
      'Google Analytics 4 setup',
      'Conversion tracking implementation',
      'Custom event tracking',
      'Tag Manager configuration',
      'Dashboard & report creation'
    ],
    contentHtml: `
      <h2>Professional Analytics Implementation</h2>
      <p>Make informed decisions with accurate, comprehensive tracking. We implement analytics systems that capture every important interaction and provide the insights you need to optimize performance.</p>
      
      <h3>Complete Tracking Solution</h3>
      <p>Our analytics setup goes beyond basic installation. We configure enhanced e-commerce tracking, custom events, cross-domain tracking, and proper attribution to give you a complete picture of user behavior.</p>
      
      <p>Using Google Tag Manager, we create a flexible, maintainable tracking infrastructure that allows for easy updates and additions without code changes.</p>
      
      <h3>What We Implement</h3>
      <ul>
        <li>Google Analytics 4 with enhanced measurement and custom dimensions</li>
        <li>E-commerce tracking for product views, cart actions, and purchases</li>
        <li>Form submission and lead tracking</li>
        <li>Custom event tracking for key user interactions</li>
        <li>Cross-platform tracking (web, app, offline conversions)</li>
        <li>Data validation and quality assurance</li>
      </ul>
      
      <p>We also create custom dashboards and automated reports, so you can monitor performance at a glance and share insights with your team. Clean data is the foundation of effective marketing decisions.</p>
    `
  },
  {
    slug: 'ab-testing-experimentation',
    title: 'A/B Testing & Experimentation',
    short: 'Make data-backed decisions through rigorous testing and experimentation programs.',
    price: 'from $1,200/mo',
    features: [
      'Test planning & hypothesis development',
      'Experiment design & implementation',
      'Statistical analysis & reporting',
      'Multivariate testing',
      'Ongoing optimization roadmap'
    ],
    contentHtml: `
      <h2>Scientific Approach to Growth</h2>
      <p>Stop guessing and start testing. Our experimentation service helps you make confident decisions based on statistical evidence, not opinions or assumptions.</p>
      
      <h3>Structured Testing Program</h3>
      <p>We establish a sustainable testing program with clear processes, proper statistical methodology, and a prioritized roadmap of hypotheses to test.</p>
      
      <p>Each test is carefully designed to isolate variables, achieve statistical significance, and provide clear, actionable learnings—whether the result is a win, a loss, or neutral.</p>
      
      <h3>Testing Capabilities</h3>
      <ul>
        <li>A/B tests for two-variant comparison</li>
        <li>Multivariate testing for multiple simultaneous changes</li>
        <li>Split URL testing for major redesigns</li>
        <li>Personalization tests based on audience segments</li>
        <li>Server-side testing for technical implementations</li>
        <li>Sequential testing for fast-moving decisions</li>
      </ul>
      
      <p>Beyond individual tests, we help you build organizational learning. Every experiment adds to your knowledge base, creating a culture of continuous improvement and data-driven decision making.</p>
    `
  },
  {
    slug: 'performance-audit',
    title: 'Performance Marketing Audit',
    short: 'Comprehensive analysis of your current marketing performance with actionable recommendations.',
    price: 'from $500/audit',
    features: [
      'Account structure review',
      'Campaign performance analysis',
      'Tracking & attribution audit',
      'Competitive benchmarking',
      'Detailed action plan'
    ],
    contentHtml: `
      <h2>Comprehensive Marketing Audit</h2>
      <p>Understand exactly where you stand and where opportunities lie. Our audit provides a thorough analysis of your current marketing efforts with clear, prioritized recommendations for improvement.</p>
      
      <h3>What We Analyze</h3>
      <p>We review your entire performance marketing stack: ad accounts, analytics setup, conversion tracking, landing pages, and more. Every element is evaluated against industry best practices and your specific business goals.</p>
      
      <p>You'll receive a detailed report identifying quick wins, medium-term opportunities, and strategic initiatives to improve performance and reduce waste.</p>
      
      <h3>Audit Coverage</h3>
      <ul>
        <li>Campaign structure and organization efficiency</li>
        <li>Targeting accuracy and audience quality</li>
        <li>Ad creative performance and testing practices</li>
        <li>Tracking implementation and data accuracy</li>
        <li>Conversion funnel and landing page analysis</li>
        <li>Budget allocation and bid strategy review</li>
        <li>Competitive positioning and market opportunities</li>
      </ul>
      
      <p>Our audit typically uncovers 15-25% improvement potential across existing campaigns. Whether you're looking to validate your current approach or identify growth opportunities, this comprehensive analysis provides the clarity you need.</p>
    `
  },
  {
    slug: 'marketing-automation',
    title: 'Marketing Automation',
    short: 'Scale your marketing efforts with intelligent automation and workflow optimization.',
    price: 'from $1,400/mo',
    features: [
      'Workflow automation setup',
      'Email sequence development',
      'Lead scoring & nurturing',
      'CRM integration',
      'Performance monitoring'
    ],
    contentHtml: `
      <h2>Intelligent Marketing Automation</h2>
      <p>Deliver the right message at the right time without manual effort. Our automation service helps you scale personalized marketing while freeing your team to focus on strategy and creative work.</p>
      
      <h3>Strategic Automation</h3>
      <p>We design automation workflows that match your customer journey, triggering relevant communications based on behavior, preferences, and lifecycle stage.</p>
      
      <p>From welcome sequences to abandoned cart recovery, re-engagement campaigns to upsell flows—we build automation that drives revenue while improving customer experience.</p>
      
      <h3>Automation Solutions</h3>
      <ul>
        <li>Lead nurturing sequences tailored to buyer stage</li>
        <li>Behavioral triggers based on website and email activity</li>
        <li>Dynamic content personalization</li>
        <li>Multi-channel workflow orchestration</li>
        <li>Integration with CRM, e-commerce, and ad platforms</li>
        <li>A/B testing within automated sequences</li>
      </ul>
      
      <p>Automation done right feels personal, not robotic. We balance efficiency with authenticity, ensuring your automated communications maintain your brand voice and deliver real value to recipients.</p>
    `
  },
  {
    slug: 'landing-page-development',
    title: 'Landing Page Development',
    short: 'High-converting landing pages designed and built for your specific campaigns.',
    price: 'from $1,000/page',
    features: [
      'Custom design & copywriting',
      'Mobile-responsive development',
      'Fast loading optimization',
      'Conversion-focused layout',
      'A/B testing variants'
    ],
    contentHtml: `
      <h2>Landing Pages That Convert</h2>
      <p>Your ad can be perfect, but if your landing page doesn't deliver, you're losing money. We create focused, conversion-optimized landing pages that align with your campaigns and drive action.</p>
      
      <h3>Conversion-First Design</h3>
      <p>Every element serves a purpose. We eliminate distractions, create clear visual hierarchy, and guide visitors toward your conversion goal with persuasive copy and strategic design.</p>
      
      <p>Our pages are built for speed, mobile experience, and compatibility across devices and browsers. We also ensure proper tracking implementation so you can measure and optimize performance.</p>
      
      <h3>What's Included</h3>
      <ul>
        <li>Custom design aligned with your brand and campaign message</li>
        <li>Conversion-focused copywriting</li>
        <li>Mobile-responsive development</li>
        <li>Page speed optimization (sub-2s load time)</li>
        <li>Form integration and tracking setup</li>
        <li>Multiple A/B test variants</li>
        <li>Analytics and conversion tracking implementation</li>
      </ul>
      
      <p>Whether you need one landing page or a full library of campaign-specific pages, we deliver designs that look professional and perform exceptionally.</p>
    `
  }
];
