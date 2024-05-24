import React from "react"
import termsContent from "@/lib/tos/termsContent"
import TermSection from "@/components/TermSection"

const Terms = () => (
  <div className="mt-20 text-white w-4/5 mx-auto">
    <div className="space-y-6">
      <h1 className="font-semibold text-2xl">Terms of Service (TOS)</h1>
      <p className="text-lg">
        Welcome to Da Performers, a digital collectibles project on da blockchain! ...
      </p>

      {/* Map through the termsContent array */}
      {termsContent.map((section) => (
        <TermSection key={section.id} title={section.title} content={section.content} />
      ))}

      <p className="text-lg">
        If you have any comments, questions, or concerns about these terms, please reach out to
        <a className="underline text-blue-500" href="mailto:bringingoutthecirkus@gmail.com">
          {" "}
          bringingoutthecirkus@gmail.com
        </a>
      </p>

      <p className="text-lg">Please note that these terms are subject to change... </p>
    </div>
  </div>
)

export default Terms
