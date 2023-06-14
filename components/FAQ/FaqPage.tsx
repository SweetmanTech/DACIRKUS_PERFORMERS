import { ReactNode } from "react"
import Layout from "../Layout"

type SectionType = {
  title: string
  content: ReactNode
}

const FaqPage = () => {
  const sections: SectionType[] = [
    {
      title: "What is Cre8ors?",
      content: (
        <>
          Cre8ors is a next-gen media brand made for the metaverse; powered by a curated collective
          of web3 creators, collaborative IP protocols, and AI-enabled NFTs.
        </>
      ),
    },
    {
      title: "What is Cre8ors vision?",
      content: (
        <>
          We envision a world where AI-tools and blockchain technology 100x the number of creators
          in the world, from 50M to 500M, ushering in a “golden-age” of accessible creativity for
          all.
        </>
      ),
    },
    {
      title: "What is Cre8ors mission?",
      content: (
        <>
          Our mission is to unleash humanities creative potential and unlock individual financial
          freedom by providing networks, resources, and tools to drive mass adoption around the
          co-creation, co-licensing, and co-ownership of digital assets.
        </>
      ),
    },
    {
      title: "How do you become a Cre8or?",
      content: (
        <>
          Cre8ors is a curated members-only community accessible. Membership is obtained by owning a
          Cre8ors Collective Passport NFT or Cre8ors AiPEP NFT.
        </>
      ),
    },
    {
      title: "What is the Cre8ors Collective Passport?",
      content: (
        <>
          The Cre8ors Collective Passport is VIP membership across the entire Cre8ors ecosystem.
          They are ERC721 NFT tokens on the Ethereum blockchain. Cre8ors Passport holders get
          priority entry to all upcoming Cre8ors products and services, plus exclusive access to the
          Cre8ors network, resources, and software tools.
        </>
      ),
    },
    {
      title: "What are the benefits of a Cre8ors Collective Passport?",
      content: (
        <ul>
          <li>Expedited allowlist allocation to all upcoming Cre8ors drops.</li>
          <li>$0 transaction fees on the CR8 protocol.</li>
          <li>Early access to all CR8 dApps.</li>
          <li>Voting rights on all Cre8ors proposals.</li>
          <li>VIP entry to all Cre8ors events.</li>
          <li>Priority Cre8ors IP pitching.</li>
          <li>Designated Cre8ors Collective user profiles and badges</li>
        </ul>
      ),
    },
    {
      title: "How many Cre8ors Collective Passports are there?",
      content: (
        <>
          There will only ever be a total of 888 Cre8ors Collective Passports, separated into two
          categories: 88 Founders Passports, reserved for the most engaged community members during
          the our “build-in-public” phase, and 800 Collective Passports available to our
          private-sale reserve list. Remaining Passports will be available on a
          first-come-first-serve basis during a public drop on June 30th 2023 (in partnership with
          Magic Eden).
        </>
      ),
    },
    {
      title: "How much does each Cre8ors Collective Passport cost?",
      content: (
        <>
          Each Cre8ors Collective Passport costs 0.8 ETH, 88 Pendants, or any variation of the two.
          For example: If you hold 17 Pendant NFTs, the final price for the Passport would be 0.8 -
          (17*0.09) = 0.64 ETH.
        </>
      ),
    },
    {
      title: "What are Pendant NFTs?",
      content: (
        <>
          The Cre8ors Collective is built on collaboration. We believe that when an entire community
          works together anything is possible. Divine Ancestral Pendant NFTs are ERC1155 tokens that
          we use to reward involvement in our community-building activities. It&apos; s our way to
          track and give value back for contributions to the collective. Each Divine Ancestral
          Pendant NFT can be burnt for a 0.009 ETH discount when reserving a Cre8ors Collective
          Passport.
        </>
      ),
    },
    {
      title: "What is the Reserve List?",
      content: (
        <>
          The Reserve List is a private passport pre-sale, available to a select group of
          contributors. Reserving guarantees you a Cre8ors Passport during public launch on June
          30th 2023.
        </>
      ),
    },
    {
      title: "How are reservations proven?",
      content: (
        <>
          All reservations are documented on-chain by minting a Cre8ors Claim Ticket. Each claim
          ticket is a unique ERC-721A NFT on the Ethereum Blockchain.
        </>
      ),
    },
    {
      title: "When can Passports be redeemed?",
      content: (
        <>
          Burn a Cre8ors Claim Ticket to redeem your passport during our public launch on June 30th
          2023.
        </>
      ),
    },
    {
      title: "What are the maximum reservations per wallet?",
      content: (
        <>
          There is no mint limit when reserving a passport, although we are committed to curating a
          well-intentioned, diverse group of creators and collectors.
        </>
      ),
    },
    {
      title: "Will any Cre8ors Passports be withheld?",
      content: (
        <>
          44 Cre8ors Passports (5% of the supply) will be withheld. Each member of the team will
          receive one Cre8ors Passport and the remainder are reserved for marketing, promotions, and
          partnerships.
        </>
      ),
    },
    {
      title: "What is a Cre8ors AiPEP?",
      content: (
        <>
          AiPEP or Artificially Intelligent Protocol-Enabled Picture, is the technology behind the
          Cre8ors PFP collection.
        </>
      ),
    },
    {
      title: "What will the supply and price be for the Cre8ors AiPEP collection?",
      content: <>[Redacted]</>,
    },
    {
      title: "Can you get on the Cre8ors AiPEP Allowlist without a passport?",
      content: (
        <>
          Yes, to get on the Cre8ors AiPEP Allowlist without a passport: 1) Apply by taking the
          Everything Corp. Personality Quiz.
          <br />
          2) View your quiz results via @Cre8orsBot Twitter. <br />
          3) Retweet your quiz results to expedite your application review. <br />
          4) Receive a free “Application Submitted NFT” airdrop. <br />
          5) If accepted, the “Application Submitted NFT” will turn into your personal Cre8ors DNA
          Mint Card.
        </>
      ),
    },
    {
      title: "When will the Cre8ors AiPEP collection be released?",
      content: (
        <>The Cre8ors AiPEP collection drops on July 27th 2023 in partnership with OpenSea.</>
      ),
    },
    {
      title: "When will the Cre8ors AiPEP collection be revealed?",
      content: <>[Redacted]</>,
    },
    {
      title: "When can Cre8ors start Cre8ing (soft-staking)?",
      content: <>Cre8ors can start Cre8ing (soft-staking) immediately after mint.</>,
    },
    {
      title: "What are the benefits of Cre8ing (soft-staking)?",
      content: (
        <>
          The longer your Cre8or is Cre8ing, the more Cre8tive it becomes (the more benefits you
          get).Earn badges, rewards, access CR8 Protocol, and unlock flow-state.
        </>
      ),
    },
    {
      title: "What is the CR8 Protocol?",
      content: (
        <>
          The CR8 Protocol is an interoperable smart contract built using novel community-bonding
          mechanics to generate and track composable media catalogs at scale. (If you are a 3rd
          party company, community, or developer interested building a CR8 dApp, please contact
          info@cre8ors.com)
        </>
      ),
    },
    {
      title: "What are CR8 dApps?",
      content: (
        <>
          CR8 dApps are a series decentralized applications built on-top of the CR8 Protocol
          enabling all Cre8ors to easily create, license, and get paid from original media IP made
          on-chain.
        </>
      ),
    },
    {
      title: "How are mint funds distributed?",
      content: (
        <>
          Funds generated by Cre8ors NFT collections and/or CR8 dApps are collected via Cre8ors
          smart contracts or 3rd party payment processors (ex. Crossmint, Moonpay) and distributed
          to Defi Entertainment Inc. (parent company of Cre8ors) which reserves all rights for
          processing and accounting purposes. Vendors please contact accountspayable@defient.co for
          more info.
        </>
      ),
    },
    {
      title: "What are mint funds used for?",
      content: (
        <>
          Mint funds are used by Defi Entertainment Inc. for business expenses such as but not
          limited to: product development, service management, production, marketing, community,
          sales, and staff.
        </>
      ),
    },
    {
      title: "How are the founders and team paid?",
      content: (
        <>
          The founders and team are employees and/or contractors of Defi Entertainment Inc. and are
          paid via crypto/fiat payroll on a recurring month-to-month basis while under contract by
          the company.
        </>
      ),
    },
    {
      title: "What is Defi Entertainment Inc.?",
      content: (
        <>
          Defi Entertainment Inc. (p/k/a Defient) is an award-winning entertainment studio and
          parent company of Cre8ors Inc. Founded by a 10x platinum-selling entertainment industry
          veteran along-side powerhouse teams from Amazon, Apple, Universal, Stem, Mint and more;
          Defient has amassed over two billion streams, five hundred million YouTube views, and is
          partnered with some of the largest creators and brands in the world. To learn more about
          Defient visit:
        </>
      ),
    },
  ]

  return (
    <Layout type="contained" hasFooter={false}>
      <div className="relative pb-[2rem]">
        <div
          className="
          fixed 
          w-[100vw] h-[265px] 
          left-0 bottom-0
          pointer-events-none
          bg-gradient-to-t from-[white] dark:from-[black] to-[transparent]
        "
        />
        <div className="font-eigerdals text-[65px] pt-[10rem] pb-[40px] dark:text-[white] mx-12">
          FAQ
        </div>
        <div className="flex justify-center">
          <div className="px-6 md:px-12 flex flex-col justify-start items-start max-w-[950px]">
            {sections.map((section: SectionType) => (
              <div key={section.title} className="pb-[2.5rem] font-quicksand">
                <div className="text-[19px] font-bold dark:text-[white]">{section.title}</div>
                <div className="text-[19px] font-medium dark:text-[white]">{section.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FaqPage
