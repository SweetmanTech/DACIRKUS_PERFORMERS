import TeamsPage from "../../components/TeamsPage"
import { getFoundingMemberData } from "../../helpers/avatar.db"

export async function getStaticProps() {
  const foundingMemberData = await getFoundingMemberData()
  return {
    props: {
      foundingMemberData,
    },
  }
}
const Teams = ({ foundingMemberData }) => <TeamsPage foundingMemberData={foundingMemberData} />

export default Teams
