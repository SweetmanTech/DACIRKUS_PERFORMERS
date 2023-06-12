/* eslint-disable react/no-array-index-key */
import FoundingMembersCard from "../../components/Cards/Founding"

const FoundingMembers = ({ foundingMemberData }) => (
  <div className="flex flex-col mt-[3rem] mb-[3rem] mx-4">
    <div className="text-[36px] md:text-[65px] font-bold font-eigerdals text-[black] dark:text-[white]">
      Founding Members
    </div>
    <div className="w-full text-[16px] font-medium lg:md:w-2/3  lg:md:text-[19px] font-quicksand dark:text-[white]">
      The original 88 founding members have been chosen for their contributions to the Cre8ors
      collective in the first stage of our community building process. Each has collected and burned
      88 Divine Ancestral Pendants to claim a founding members{`'`} pass and represent an integral
      part of the leading team of the Cre8ors collective.
    </div>
    <div className="mt-10 overflow-y-scroll h-96 scrollbar dark:scrollbar-thumb-[white] scrollbar-thumb-[black] dark:scrollbar-track-black scrollbar-track-white scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 gap-y-4 ">
        {foundingMemberData.length > 0 &&
          foundingMemberData.map((item) => (
            <FoundingMembersCard
              key={item.twitterHandle}
              twitterHandle={item.twitterHandle}
              profilePic={item.profileImage}
            />
          ))}
      </div>
    </div>
  </div>
)
export default FoundingMembers
