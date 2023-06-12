import TeamMembersCard from "../../components/Cards/Team"

const TeamMembers = ({ teamMemberData }) => (
  <div className="flex flex-col lg:md:w-[90%] m-4">
    <h2 className="text-[65px] font-bold font-eigerdals text-[black] dark:text-[white]">
      Team Members
    </h2>
    <div className="w-full text-sm font-medium lg:md:w-1/2 lg:md:text-[19px] font-quicksand dark:text-[white]">
      Cre8ors goes far beyond what your average NFT collection is capable of. Our powerhouse team
      includes 14+ music, media, and web3 industry veterans from companies like Amazon, Apple,
      Universal, Stem, Mint Songs and more.
    </div>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 pt-[2rem]">
      {teamMemberData.map(({ name, role, favQuote, imgSrc, twitterHandle }) => (
        <TeamMembersCard
          key={name}
          name={name}
          role={role}
          favQuote={favQuote}
          imgSrc={imgSrc}
          twitterHandle={twitterHandle}
        />
      ))}
    </div>
  </div>
)

export default TeamMembers
