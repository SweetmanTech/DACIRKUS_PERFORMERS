import TeamMembersCard from "../../components/Cards/Team"

const TeamMembers = () => (
  <div className="flex flex-col lg:md:w-[90%] m-4 gap-y-4">
    <h2 className="text-4xl font-bold font-objektivmk1_bold">Team Members</h2>
    <div className="w-full text-sm font-bold lg:md:w-1/2 lg:md:text-xl font-objektivmk1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et lobortis eros. Duis non
      libero non urna iaculis volutpat. Vestibulum vitae purus vel quam porttitor iaculis ac non
      quam. Nam non dui sit amet nibh congue tristique. Sed vel consequat eros. Aliquam ultrices
      erat nec turpis iaculis, vitae fringilla velit hendrerit. Vivamus imperdiet elit eget ipsum
      malesuada, at euismod augue aliquet. Aenean eget purus urna. Nulla et sagittis diam.
    </div>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
      <TeamMembersCard />
      <TeamMembersCard />
      <TeamMembersCard />
      <TeamMembersCard />
      <TeamMembersCard />
      <TeamMembersCard />
      <TeamMembersCard />
      <TeamMembersCard />
    </div>
  </div>
)

export default TeamMembers
