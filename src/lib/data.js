export const getBooks=async()=>{
const res=await fetch('https://online-book-borrowing.vercel.app/data.json');
return res.json();
}