import React from "react"

const FaqSection = ({ title, content }) => (
  <section className="space-y-4">
    <h2 className="font-semibold text-2xl">{title}</h2>

    <p className="text-lg">{content}</p>
  </section>
)

export default FaqSection
