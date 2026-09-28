import ProfileInfo from "../components/ProfileInfo"

const Header = () => {
  return (
    <header className="flex justify-between px-5 py-3 h-auto w-full">
        <div className="content">
            <h1 className="text-3xl font-semibold mb-1 text-[#112D4E]">Welcome, <span className="text-[#3F72AF]">Mahesh</span></h1>
            <p className="text-[#52677D]">Here's Your Monthly Revenue Overview</p>
        </div>
        <ProfileInfo />
    </header>
  )
}

export default Header