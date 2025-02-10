"use client"
interface QuickSearchProps {
  onSearch: (query: string) => void;
}

const QuickSearch = ({onSearch}:QuickSearchProps)=>{

    return(
    <div className="mb-4">
        <input type="text" placeholder="Search books" onChange={(e)=>onSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2
         focus:ring-blue-500 focus:border-transparent" />
    </div>
    )
}

export default QuickSearch