import { PlusIcon } from 'lucide-react'

const MonthBanner = () => {
  return (
    <div className='flex justify-between px-5 items-center bg-[#112D4E] mx-5 rounded-[5px] my-4'>
        <div className="month_and_target py-3 px-1">
            <h2 className='month text-[#FFFFFF] text-3xl font-semibold pb-1'>September 2026</h2>
            <p className='revenue_target text-[#DBE2EF]'>Monthly Target : $100</p>
        </div>
        <button className='bg-[#3F72AF] border border-[#3F72AF] hover:border-[#112D4E] hover:cursor-pointer text-[#FFFFFF] px-3 py-2.5 flex justify-center items-center rounded-xl gap-2'><PlusIcon color='white'/> Add Revenue</button>
    </div>
  )
}

export default MonthBanner