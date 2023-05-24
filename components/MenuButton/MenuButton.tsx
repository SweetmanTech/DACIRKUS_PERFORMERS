const MenuButton = ({ toggleMenu }) => (
  <button
    type="button"
    className="flex flex-col justify-center items-center space-y-2 w-[50px] h-[50px] bg-gradient-to-r from-[#DDDDDD] from-0% to-[#F2F2F2] to-90% rounded-lg cursor-pointer"
    onClick={toggleMenu}
  >
    <hr className="w-8 h-0.5 border-[1.25px] border-black bg-none" />
    <hr className="w-8 h-0.5 border-[1.25px] border-black " />
    <hr className="w-8 h-0.5 border-[1.25px] border-black " />
  </button>
)
export default MenuButton
