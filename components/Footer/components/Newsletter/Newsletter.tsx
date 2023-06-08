import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const handleClick = async (e) => {
    e.preventDefault()
    await axios.post("/api/newsletter", { email })
    toast.success("Subscribed!")
    setEmail("")
  }
  const onChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <div className="flex flex-col items-center col-span-3 pt-6 md:block md:pt-0 md:col-span-1">
      <div className="font-quicksand dark:text-[white] text-[black]">Join our newsletter</div>
      <div className="relative pt-[0.5rem] w-[190px] md:w-[202px]">
        <input
          className="border-[1px] border-[black] rounded-[3rem] font-quicksand px-3 py-1"
          placeholder="Email Address"
          onChange={onChange}
          value={email}
          required
        />
        <div className="absolute top-[10px] right-[0px] md:right-[10px]">
          <button
            type="button"
            className="bg-[black] px-2 py-1 rounded-[2rem] text-[white] text-[0.5rem]"
            onClick={handleClick}
            disabled={!!(email.length === 0 || !email.includes("@"))}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
