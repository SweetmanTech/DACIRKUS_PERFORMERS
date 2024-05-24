import React from "react"

const TermSection = ({ title, content }) => (
  <section className="space-y-4">
    <h2 className="font-semibold text-2xl">{title}</h2>
    {content.map((paragraph) => (
      <p key={paragraph.id} className="text-lg">
        {paragraph.text}
      </p>
    ))}
  </section>
)

export default TermSection
