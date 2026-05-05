import BookCard from "@/component/BookCard";
import { getBooks } from "@/lib/data";


const AllBooks =async() => {
    const books=await getBooks();

    return (
        <div  className="">
            <div className="flex justify-between items-center mx-27 mt-10">

          
<select defaultValue="Filter by Category" className="select select-accent text-center">
  <option disabled={true}>Filter by Category</option>
  <option>All Category</option>
  <option>Story</option>
  <option>Tech</option>
  <option>Science</option>
</select>
  <label className="input ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
            
            </div>



        <div className="grid grid-cols-3 gap-5 my-5 w-10/12 mx-auto ">
            {
                books.map((book,index)=><BookCard book={book} key={index}/>)
            }
        </div>
        </div>
    );
};

export default AllBooks;