const CaseStudies = () => {
  const caseStudies = [
    {
      title: "B2B SaaS Platform Launch",
      challenge: "A new SaaS platform needed to establish market presence and generate qualified leads in a competitive landscape.",
      solution: "We developed a comprehensive go-to-market strategy including brand positioning, content marketing, and targeted digital campaigns.",
      results: [
        "Generated 500+ qualified leads in first quarter",
        "Achieved 25% market share in target segment",
        "Built brand awareness from 0% to 40% in 6 months",
      ],
    },
    {
      title: "E-commerce Brand Transformation",
      challenge: "An established retailer needed to modernize their brand and transition to digital-first customer experience.",
      solution: "Complete brand refresh with new visual identity, website redesign, and omnichannel marketing strategy.",
      results: [
        "300% increase in online sales",
        "Reduced customer acquisition cost by 45%",
        "Improved customer lifetime value by 60%",
      ],
    },
    {
      title: "Healthcare Startup Positioning",
      challenge: "A healthcare technology startup needed to build trust and credibility while navigating complex regulatory requirements.",
      solution: "Developed thought leadership strategy, compliance-focused content, and targeted healthcare professional outreach.",
      results: [
        "Secured partnerships with 3 major healthcare systems",
        "Generated $2M in Series A funding",
        "Established CEO as industry thought leader",
      ],
    },
  ];

  return (
    <section className="py-20 bg-dark_grey bg-opacity-30">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-white sm:text-40 text-30 font-medium mb-6">
            Case Studies
          </h2>
          <p className="text-muted text-opacity-60 text-18 max-w-3xl mx-auto">
            Dive deeper into how we've solved complex marketing challenges 
            and delivered exceptional results for our clients.
          </p>
        </div>
        
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-dark_grey bg-opacity-50 p-8 rounded-xl"
            >
              <h3 className="text-white text-28 font-bold mb-6">
                {study.title}
              </h3>
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-primary text-18 font-medium mb-3">
                    Challenge
                  </h4>
                  <p className="text-muted text-opacity-60 text-16">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-primary text-18 font-medium mb-3">
                    Solution
                  </h4>
                  <p className="text-muted text-opacity-60 text-16">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-primary text-18 font-medium mb-3">
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted text-opacity-60 text-16">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;