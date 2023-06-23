import Media from "../../shared/Media"
import { Button } from "../../shared/Button"

interface RedeemProps {
  handleClose: () => void
}

const Redeem = ({ handleClose }: RedeemProps) => (
  <div
    className="bg-[url('/assets/Common/popup.svg')] 
            p-4 m-0 w-[290px] samsungS8:m-6 samsungS8:w-[340px] md:w-[400px] 
            h-[400px] samsungS8:h-[500px] md:h-[600px] 
            bg-center 
            shadow-[0px_5px_9px_rgba(0,0,0,0.25)]
            rounded-[20px] flex flex-col justify-center items-center gap-[20px] relative"
  >
    <div className="bg-[black] absolute top-[10px] right-[10px] w-6 h-6 m-2 rounded-full cursor-pointer
      flex justify-center items-center">
    <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClose}
      >
        <line
          x1="2.84836"
          y1="1.77502"
          x2="10.273"
          y2="9.19965"
          stroke="url(#paint0_linear_1383_155)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="2.72705"
          y1="9.1996"
          x2="10.1517"
          y2="1.77498"
          stroke="url(#paint1_linear_1383_155)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1383_155"
            x1="5.50001"
            y1="6.548"
            x2="4.7929"
            y2="7.2551"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.40625" stop-color="white" />
            <stop offset="0.578125" stop-color="#8D8DDA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1383_155"
            x1="7.50002"
            y1="6.54795"
            x2="8.20713"
            y2="7.25506"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.40625" stop-color="white" />
            <stop offset="0.578125" stop-color="#8D8DDA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="font-eigerdals text-[30px] md:text-[36px] text-center leading-[99.3%]">
      Redeem Your
      <br />
      Passport!
    </div>
    <Media
      link="/assets/Claim/redeem.svg"
      type="image"
      containerClasses="w-[300px] h-[150px] md:w-[280px] md:h-[300px]"
    />
    <Button
      id="go_btn_in_redeem"
      className="!uppercase w-[200px] !bg-[black] !text-white !shadow-[0px_4px_4px_rgb(0,0,0,0.25)]"
    >
      Go
    </Button>
  </div>
)

export default Redeem
