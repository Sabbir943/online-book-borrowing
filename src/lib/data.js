export const getBooks=async()=>{
const res=await fetch('https://online-book-borrowing.vercel.app/data.json');
return res.json();
}

export const getMarqueeText=async()=>{
const res=await fetch('https://online-book-borrowing.vercel.app/marquee.json');
return res.json();
}