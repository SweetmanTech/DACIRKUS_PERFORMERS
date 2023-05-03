import Header from "../Header"
import FoundingMembers from "./sections/FoundingMembers"
import TeamMembers from "./sections/TeamMembers"

const TeamsPage = ({ foundingMemberData, teamMemberData }) => (
  <div className="min-h-screen overflow-y-auto text-black bg-white ">
    <Header />
    <div className="relative flex flex-col items-center justify-center mt-20">
      <TeamMembers teamMemberData={teamMemberData} />
      <FoundingMembers foundingMemberData={foundingMemberData} />
    </div>
  </div>
)

export default TeamsPage
