import React from "react"

export default function index() {
  return (
    <div className="w-full h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8 bg-gray-100 ">
      <div className="faq-column p-4 md:p-6">
        <div className="faq-content">
          <h2 className="text-2xl font-bold  text-gray-800">Frequently Asked Questions (FAQs)</h2>
          <h5 className="text-sm font-semibold text-gray-700">1. What are Da Performers?</h5>
          <p className="text-[12px] text-gray-600 mb-1">
            Da Performers are unique digital collectible characters minted on da blockchain!
            Specifically the Ethereum L2 network BASE. Each character is one-of-a-kind and can be
            owned by purchasing its corresponding NFT. Da Performers serve as the official entry
            point to Da Cirkus!
          </p>

          <h5 className="text-sm font-semibold text-gray-700">
            2. How much do Da Performers cost?
          </h5>
          <p className="text-[12px] text-gray-600">
            The pricing for Da Performers is currently being finalized, with options expected to be
            either $10 or $20 per character.
          </p>

          <h5 className="text-sm font-semibold">3. Is there a roadmap for Da Performers?</h5>
          <p className="text-[12px] text-gray-600">
            No, Da Performers operate on vibes rather than a roadmap. Our focus is on building a
            vibrant and interactive world, and I want to emphasize from the start that the road to
            success is not linear.
          </p>

          <h5 className="text-sm font-semibold text-gray-700">
            4. How many Da Performers are available?
          </h5>
          <p className="text-[12px] text-gray-600 ">
            Each character combination can be created only once. We will continue minting until we
            run out of character combinations or until the team decides to close minting.
          </p>

          <h5 className="text-sm font-semibold text-gray-700">
            5. Can I use my Da Performer for commercial purposes?
          </h5>
          <p className="text-[12px] text-gray-600">
            Yes, you are permitted to use your Da Performer for personal or commercial purposes,
            such as digital avatars, profile pictures, and merchandise, as long as your earnings do
            not exceed $100,000.
          </p>
        </div>
      </div>
      <div className="faq-column p-6">
        <div className="faq-content">
          <h5 className="text-sm font-semibold text-gray-700">
            6. How do I opt out of sharing my characters intellectual property?
          </h5>
          <p className="text-[12px] text-gray-600">
            If you wish to opt out of sharing your characters intellectual property for use in Da
            Cirkus projects, please contact our team, and we will accommodate your request.
          </p>

          <h5 className="text-sm font-semibold text-gray-700">
            7. Is owning a Da Performer a financial investment?
          </h5>
          <p className="text-[12px] text-gray-600">
            No, Da Performers are digital collectibles intended for entertainment purposes. While
            they may increase in value over time, there is no guaranteed return on investment.
          </p>

          <h5 className="text-sm font-semibold text-gray-700">
            8. How can I contact the Da Cirkus team?
          </h5>
          <p className="text-[12px] text-gray-600">
            You can reach out to the Da Cirkus team through our discord, social media channels, or
            email (bringingoutthecirkus@gmail.com). We are always happy to assist you with any
            questions or concerns.
          </p>

          <h5 className="text-sm font-semibold text-gray-700">9. Dispute Resolution</h5>
          <p className="text-[12px] text-gray-600">
            Any disputes between users and Da Cirkus will be resolved through arbitration in
            accordance with the laws of California.
          </p>

          <p className="text-sm text-gray-600 mt-4 font-bold">
            Please note that these FAQs are subject to change, and it is recommended to review them
            periodically for any updates. Thank you for being a part of the Da Performers community!
          </p>
        </div>
      </div>
    </div>
  )
}
