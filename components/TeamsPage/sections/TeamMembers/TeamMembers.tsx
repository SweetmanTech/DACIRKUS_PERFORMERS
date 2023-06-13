import TeamMembersCard from "../../components/Cards/Team"

const TeamMembers = ({ teamMemberData }) => (
  <div className="flex flex-col m-4">
    <div className="text-[36px] md:text-[65px] font-bold font-eigerdals text-[black] dark:text-[white]">
      Team Members
    </div>
    <div className="w-full text-[16px] font-medium lg:md:w-2/3  lg:md:text-[19px] font-quicksand dark:text-[white]">
      Our powerhouse team includes 14+ music, media, and web3 industry veterans from companies like
      Amazon, Apple, Universal, Stem, Mint Songs and more.
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
