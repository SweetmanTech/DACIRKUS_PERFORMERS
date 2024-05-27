import React from "react"
import faqContent from "@/lib/faq/faqContent"
import FaqSection from "@/components/FaqSection"

const Faq = () => (
  <div className="mt-20 text-white w-4/5 mx-auto">
    <div className="space-y-6">
      <h1 className="font-semibold text-2xl">Frequently Asked Questions (FAQs)</h1>

      {/* Map through the termsContent array */}
      {faqContent.map((section) => (
        <FaqSection key={section.id} title={section.title} content={section.content} />
      ))}

      <p className="text-lg">
        Please note that these FAQs are subject to change, and it is recommended to review them
        periodically for any updates. Thank you for being a part of the Da Performers community!
      </p>
    </div>
  </div>
)

export default Faq
