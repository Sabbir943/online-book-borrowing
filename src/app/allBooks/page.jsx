import BookCard from "@/component/BookCard";
import Category from "@/component/Category";
import Search from "@/component/Search";
import { getBooks } from "@/lib/data";


const AllBooks =async({searchParams}) => {
  const{category ,search}=await searchParams;
  console.log(search);
    const books=await getBooks();
    let filterBooks=books;
     if (category) {
        filterBooks = filterBooks.filter(
            book =>
                book.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Search Filter
    if (search) {
        filterBooks = filterBooks.filter(
            book =>
                book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.author.toLowerCase().includes(search.toLowerCase())
        );
    }

    return (
        <div  className="">
            

         <Search/>
        <Category/>
        <div className="grid grid-cols-3 gap-5 my-5 w-10/12 mx-auto ">
            {
                filterBooks.map((book,index)=><BookCard book={book} key={index}/>)
            }
        </div>
        </div>
    );
};

export default AllBooks;