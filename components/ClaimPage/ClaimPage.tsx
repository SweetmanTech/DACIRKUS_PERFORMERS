import Layout from "../Layout"
import { useMeasure } from 'react-use'

const ClaimPage = () => {
  const [ containerRef, { width, height } ] = useMeasure()
  return (
    <Layout type="base">
        <div
            className="relative h-[100vh] overflow-y-scroll overflow-x-hidden z-[1] w-[100vw]"
            ref={containerRef}
        >
            <div className="relative z-[6] border-[1px] border-[red]"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundImage: `url('/assets/Claim/background.svg')`,
                    backgroundSize: `${height / 1048 * 1579}px ${height}px`,
                }}
            >

            </div>
        </div>
    </Layout>
  )
}

export default ClaimPage
