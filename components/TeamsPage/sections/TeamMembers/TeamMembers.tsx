import TeamMembersCard from "../../components/Cards/Team"

const TeamMembers = ({ teamMemberData }) => (
  <div className="flex flex-col lg:md:w-[90%] m-4 gap-y-4">
    <h2 className="text-4xl font-bold font-eigerdals">Team Members</h2>
    <div className="w-full text-sm font-bold lg:md:w-1/2 lg:md:text-xl font-quicksand">
      Cre8ors goes far beyond what your average NFT collection is capable of. Our powerhouse team
      includes 14+ music, media, and web3 industry veterans from companies like Amazon, Apple,
      Universal, Stem, Mint Songs and more.
    </div>
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 md:grid-cols-2">
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
