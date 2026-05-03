import BookCard from "@/component/BookCard";
import { getBooks } from "@/lib/data";

const AllBooks =async() => {
    const books=await getBooks();

    return (
        <div className="grid grid-cols-3 gap-5 my-10">
            {
                books.map((book,index)=><BookCard book={book} key={index}/>)
            }
        </div>
    );
};

export default AllBooks;