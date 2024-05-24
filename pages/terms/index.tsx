import React from "react"

// TermSection Component
const TermSection = ({ title, content }) => (
  <section className="space-y-4">
    <h2 className="font-semibold text-2xl">{title}</h2>
    {content.map((paragraph, index) => (
      <p key={index} className="text-lg">
        {paragraph}
      </p>
    ))}
  </section>
)

const termsContent = [
  {
    title: "1. Ownership and Usage Rights",
    content: [
      "- Each Da Performers NFT represents a unique digital collectible character on the blockchain. As the purchaser, you own the intellectual property rights to your character.",
      "- Da Cirkus retains the right to use the characters in animations, games, and other creative or commercial endeavors. However, if you wish to opt-out of sharing the intellectual property, please reach out to our team.",
      "- Please note that any logos, branding, and content associated with Da Performers are the property of Da Cirkus LLC. Ownership of Da Performers NFTs grants you the intellectual property rights solely to your specific character.",
    ],
  },
  {
    title: "2. Investment Disclaimer",
    content: [
      "- Da Performers NFTs are digital collectibles intended for entertainment purposes. They are not financial investments, and there is no guaranteed return on investment.",
      "- The primary purpose of Da Performers is to build a vibrant and interactive world. Your contribution helps us achieve this goal. Any potential financial gains from owning a Da Performers NFT are incidental.",
    ],
  },
  {
    title: "3. Usage and Earnings",
    content: [
      "- You are permitted to use your character for personal or commercial purposes, as long as your earnings from such activities do not exceed $100,000.",
      "- If your earnings exceed $100,000, please contact our team to discuss further collaboration opportunities.",
    ],
  },
  {
    title: "4. Transferability",
    content: [
      "- Da Performers NFTs are freely transferable between users unless otherwise specified.",
    ],
  },
  {
    title: "5. License Agreement",
    content: [
      "- By purchasing a Da Performers NFT, you are granted a non-exclusive license to use the associated character for personal and commercial purposes, subject to the terms outlined herein.",
    ],
  },
  {
    title: "6. Prohibited Activities",
    content: [
      "- Users are prohibited from engaging in illegal activities, fraud, or misuse of intellectual property related to Da Performers NFTs.",
    ],
  },
  {
    title: "7. Termination",
    content: [
      "- Da Cirkus reserves the right to refuse or terminate access to any user or entity at our discretion.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "- Da Cirkus LLC, its affiliates, and their respective directors, officers, employees, agents, successors, and assigns shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from the use or inability to use Da Performers NFTs or the website.",
    ],
  },
  {
    title: "9. Indemnification",
    content: [
      "- You agree to indemnify and hold harmless Da Cirkus LLC, its affiliates, and their respective directors, officers, employees, agents, successors, and assigns from and against any claims, damages, liabilities, losses, costs, or expenses arising out of or relating to your use of Da Performers NFTs or the website.",
    ],
  },
  {
    title: "10. Governing Law and Jurisdiction",
    content: [
      "- These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any dispute arising from or relating to these Terms of Service shall be subject to the exclusive jurisdiction and venue of the state or federal courts located in [County], California.",
    ],
  },
  {
    title: "11. Severability",
    content: [
      "- If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
    ],
  },
  {
    title: "12. Entire Agreement",
    content: [
      "- These Terms of Service constitute the entire agreement between you and Da Cirkus LLC regarding the use of Da Performers NFTs and supersede any prior agreements or understandings.",
    ],
  },
  {
    title: "13. Waiver",
    content: [
      "- The failure of Da Cirkus LLC to enforce any provision of these Terms of Service shall not be deemed a waiver of such provision or any other provision herein.",
    ],
  },
  {
    title: "14. Assignment",
    content: [
      "- You may not assign or transfer any of your rights or obligations under these Terms of Service without the prior written consent of Da Cirkus LLC. Da Cirkus LLC may freely assign these Terms of Service without consent or notice.",
    ],
  },

  {
    title: "15. Language",
    content: [
      "- The original version of these Terms of Service is written in English. In the event of any discrepancy between the English version and any translated version, the English version shall prevail.",
    ],
  },

  {
    title: "16. Miscellaneous",
    content: [
      "- Da Performers reserves the right to modify these terms and conditions at any time. We will notify users of any changes through our official channels.",
      "- By participating in the Da Performers project, you agree to comply with all applicable laws and regulations.",
    ],
  },
]
const Terms = () => {
  return (
    <div className="mt-20 text-white w-4/5 mx-auto">
      <div className="space-y-6">
        <h1 className="font-semibold text-2xl">Terms of Service (TOS)</h1>
        <p className="text-lg">
          Welcome to Da Performers, a digital collectibles project on da blockchain! These Terms of
          Service apply to your access and use of the website, www.DaPerformers.com, any content,
          tools, experiences, features, and functionality offered on or through our website and any
          of our collectibles. The services are provided by or on behalf of Da Cirkus LLC, a
          California-based company.
        </p>

        {/* Map through the termsContent array */}
        {termsContent.map((section, index) => (
          <TermSection key={index} title={section.title} content={section.content} />
        ))}

        <p className="text-lg">
          If you have any comments, questions, or concerns about these terms please reach out to
          <a className="underline text-blue-500" href="mailto:bringingoutthecirkus@gmail.com">
            {" "}
            bringingoutthecirkus@gmail.com
          </a>
        </p>

        <p className="text-lg">
          Please note that these terms are subject to change, and it is recommended to review them
          periodically for any updates. Thank you for being a part of the Da Performers community!
        </p>
      </div>
    </div>
  )
}

export default Terms
