import React from "react"

// TermSection Component
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

const termsContent = [
  {
    id: 1,
    title: "1. Ownership and Usage Rights",
    content: [
      {
        id: "1-1",
        text: "- Each Da Performers NFT represents a unique digital collectible character on the blockchain. As the purchaser, you own the intellectual property rights to your character.",
      },
      {
        id: "1-2",
        text: "- Da Cirkus retains the right to use the characters in animations, games, and other creative or commercial endeavors. However, if you wish to opt-out of sharing the intellectual property, please reach out to our team.",
      },
      {
        id: "1-3",
        text: "- Please note that any logos, branding, and content associated with Da Performers are the property of Da Cirkus LLC. Ownership of Da Performers NFTs grants you the intellectual property rights solely to your specific character.",
      },
    ],
  },
  {
    id: 2,
    title: "2. Investment Disclaimer",
    content: [
      {
        id: "2-1",
        text: "- Da Performers NFTs are digital collectibles intended for entertainment purposes. They are not financial investments, and there is no guaranteed return on investment.",
      },
      {
        id: "2-2",
        text: "- The primary purpose of Da Performers is to build a vibrant and interactive world. Your contribution helps us achieve this goal. Any potential financial gains from owning a Da Performers NFT are incidental.",
      },
    ],
  },
  {
    id: 3,
    title: "3. Usage and Earnings",
    content: [
      {
        id: "3-1",
        text: "- You are permitted to use your character for personal or commercial purposes, as long as your earnings from such activities do not exceed $100,000.",
      },
      {
        id: "3-2",
        text: "- If your earnings exceed $100,000, please contact our team to discuss further collaboration opportunities.",
      },
    ],
  },
  {
    id: 4,
    title: "4. Transferability",
    content: [
      {
        id: "4-1",
        text: "- Da Performers NFTs are freely transferable between users unless otherwise specified.",
      },
    ],
  },
  {
    id: 5,
    title: "5. License Agreement",
    content: [
      {
        id: "5-1",
        text: "- By purchasing a Da Performers NFT, you are granted a non-exclusive license to use the associated character for personal and commercial purposes, subject to the terms outlined herein.",
      },
    ],
  },
  {
    id: 6,
    title: "6. Prohibited Activities",
    content: [
      {
        id: "6-1",
        text: "- Users are prohibited from engaging in illegal activities, fraud, or misuse of intellectual property related to Da Performers NFTs.",
      },
    ],
  },
  {
    id: 7,
    title: "7. Termination",
    content: [
      {
        id: "7-1",
        text: "- Da Cirkus reserves the right to refuse or terminate access to any user or entity at our discretion.",
      },
    ],
  },
  {
    id: 8,
    title: "8. Limitation of Liability",
    content: [
      {
        id: "8-1",
        text: "- Da Cirkus LLC, its affiliates, and their respective directors, officers, employees, agents, successors, and assigns shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from the use or inability to use Da Performers NFTs or the website.",
      },
    ],
  },
  {
    id: 9,
    title: "9. Indemnification",
    content: [
      {
        id: "9-1",
        text: "- You agree to indemnify and hold harmless Da Cirkus LLC, its affiliates, and their respective directors, officers, employees, agents, successors, and assigns from and against any claims, damages, liabilities, losses, costs, or expenses arising out of or relating to your use of Da Performers NFTs or the website.",
      },
    ],
  },
  {
    id: 10,
    title: "10. Governing Law and Jurisdiction",
    content: [
      {
        id: "10-1",
        text: "- These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any dispute arising from or relating to these Terms of Service shall be subject to the exclusive jurisdiction and venue of the state or federal courts located in [County], California.",
      },
    ],
  },
  {
    id: 10,
    title: "10. Governing Law and Jurisdiction",
    content: [
      {
        id: "10-1",
        text: "- These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any dispute arising from or relating to these Terms of Service shall be subject to the exclusive jurisdiction and venue of the state or federal courts located in [County], California.",
      },
    ],
  },
  {
    id: 11,
    title: "11. Severability",
    content: [
      {
        id: "11-1",
        text: "- If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
      },
    ],
  },
  {
    id: 12,
    title: "12. Entire Agreement",
    content: [
      {
        id: "12-1",
        text: "- These Terms of Service constitute the entire agreement between you and Da Cirkus LLC regarding the use of Da Performers NFTs and supersede any prior agreements or understandings.",
      },
    ],
  },
  {
    id: 13,
    title: "13. Waiver",
    content: [
      {
        id: "13-1",
        text: "- The failure of Da Cirkus LLC to enforce any provision of these Terms of Service shall not be deemed a waiver of such provision or any other provision herein.",
      },
    ],
  },
  {
    id: 14,
    title: "14. Assignment",
    content: [
      {
        id: "14-1",
        text: "- You may not assign or transfer any of your rights or obligations under these Terms of Service without the prior written consent of Da Cirkus LLC. Da Cirkus LLC may freely assign these Terms of Service without consent or notice.",
      },
    ],
  },
  {
    id: 15,
    title: "15. Language",
    content: [
      {
        id: "15-1",
        text: "- The original version of these Terms of Service is written in English. In the event of any discrepancy between the English version and any translated version, the English version shall prevail.",
      },
    ],
  },
  {
    id: 16,
    title: "16. Miscellaneous",
    content: [
      {
        id: "16-1",
        text: "- Da Performers reserves the right to modify these terms and conditions at any time. We will notify users of any changes through our official channels.",
      },
      {
        id: "16-2",
        text: "- By participating in the Da Performers project, you agree to comply with all applicable laws and regulations.",
      },
    ],
  },
]

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
