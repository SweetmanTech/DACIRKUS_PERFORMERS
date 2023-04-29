/* eslint-disable react/no-array-index-key */
import FoundingMembersCard from "../../components/Cards/Founding"

const membersArray = Array(88)
  .fill(0)
  .map((_, i) => i + 1)

const FoundingMembers = () => (
  <div className="flex flex-col justify-center m-4 lg:md:w-[90%]">
    <h2 className="py-4 text-4xl font-bold font-objektivmk1_bold">Founding Members</h2>
    <div className="w-full text-sm font-bold lg:md:w-1/2 lg:md:text-xl font-objektivmk1">
      The original 88 founding members have been chosen for their contributions to the cre8ors
      collective in the first stage of our community building process. They have collected and
      burned 88 Divine Ancestral Pendants to claim a founding members&apos; pass and they represent
      an integral part of the leading team of the Cre8ors collective.
    </div>
    <div className="mt-10 overflow-y-scroll h-96 scrollbar scrollbar-thumb-[#f9c003] scrollbar-track-white scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
      <div className="grid grid-cols-1 gap-4 overflow-y-scroll lg:grid-cols-4 md:grid-cols-2 gap-y-4 ">
        {membersArray.map((_, i) => (
          <FoundingMembersCard key={`test${i}`} />
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-5 lg:md:h-24 bg-gradient-to-t from-white via-white to-transparent" />
      </div>
    </div>
  </div>
)
export default FoundingMembers
