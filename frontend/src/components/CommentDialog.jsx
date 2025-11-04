// // import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
// // import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
// // import { MoreHorizontal } from 'lucide-react'
// // import React, { useEffect, useState } from 'react'
// // import { Link } from 'react-router-dom'
// // import { Button } from './ui/button'
// // import { useDispatch, useSelector } from 'react-redux'
// // import Comment from './Comment'
// // import axios from 'axios'
// // import { setPosts } from '@/redux/postSlice'
// // import { toast } from 'sonner'

// // function CommentDialog({ open, setOpen }) {
// //  const [text, setText] = useState("");
// //  const {selectedPost, posts} = useSelector(store => store.post);
// //  const [comment, setComment] = useState([]);
// //  const dispatch = useDispatch();

// //  useEffect(() => {
// //    if(selectedPost){
// //     setComment(selectedPost.comments)
// //    }
// //  }, [selectedPost])
 

// //  const changeEventHandler = (e) =>{
// //   const inputText = e.target.value;
// //   if(inputText.trim()){
// //     setText(inputText);
// //   }else{
// //     setText("");
// //   }
// //  }

// //  const sendMessageHandler = async () => {
// //     try {
// //       const res = await axios.post(`http://localhost:8000/api/v1/post/${selectedPost?._id}/comment`, { text }, {
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         withCredentials: true
// //       });
// //       if (res.data.success) {
// //         const updatedCommentData = [...comment, res.data.comment];
// //         setComment(updatedCommentData);

// //         const updatedPostData = posts.map(p =>
// //           p._id === selectedPost._id ? { ...p, comments: updatedCommentData } : p
// //         )
// //         dispatch(setPosts(updatedPostData));
// //         toast.success(res.data.message);
// //         setText("");
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   }
// //   return (
// //     <Dialog open={open}>
// //       <DialogContent onInteractOutside={() => setOpen(false)}
// //         className="max-w-5xl p-0 flex flex-col">
// //         <div className='flex flex-1'>
// //           <div className='w-1/2'>
// //             <img className="w-full h-full object-cover rounded-l-lg"
// //               src={selectedPost?.image} alt="post_img" />
// //           </div>
// //           <div className='w-1/2 flex flex-col justify-between'>
// //             <div className='flex items-center justify-between p-4'>
// //               <div className='flex gap-3 items-center'>
// //                 <Link>
// //                   <Avatar>
// //                     <AvatarImage src={selectedPost?.author?.profilePicture} />
// //                     <AvatarFallback>CN</AvatarFallback>
// //                   </Avatar>
// //                 </Link>
// //                 <div>
// //                   <Link className='font-semibold text-xs'>{selectedPost?.author?.username}</Link>
// //                   {/* <span className='text-gray-600 text-sm'>Bio here...</span> */}
// //               </div>
// //                 </div>
// //               <Dialog>
// //                 <DialogTrigger asChild>
// //                   <MoreHorizontal className='cursor-pointer' />
// //                 </DialogTrigger>
// //                 <DialogContent className='flex flex-col items-center text-sm text-center'>
// //                   <div>
// //                     <Button variant="ghost" className="cursor-pointer w-fit text-[#ED4956] font-bold">Unfollow</Button>
// //                   </div>
// //                   <div className='cursor-pointer w-full'>
// //                     Add to favorites
// //                   </div>
// //                 </DialogContent>
// //               </Dialog>
// //             </div>
// //             <div className='flex-1 overflow-y-auto max-h-96 p-4'>
// //                {
// //                 comment.map((comment=> <Comment key={comment._id} comment={comment}/>))
// //                }
// //             </div>
// //             <div className='p-4'>
// //               <div className='flex items-center gap-2'>
// //                 <input type="text" value={text} onChange={changeEventHandler} placeholder='Add a comment...' className='w-full outline-none border text-sm border-gray-300 p-2 rounded' />
// //                 <Button disabled={!text.trim()} onClick={sendMessageHandler} variant="outline">Send</Button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>


// //       </DialogContent>
// //     </Dialog>
// //   )
// // }

// // export default CommentDialog


// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
// import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
// import { MoreHorizontal } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from './ui/button'
// import { useDispatch, useSelector } from 'react-redux'
// import Comment from './Comment'
// import axios from 'axios'
// import { setPosts } from '@/redux/postSlice'
// import { toast } from 'sonner'

// function CommentDialog({ open, setOpen }) {
//   const [text, setText] = useState("");
//   const { selectedPost, posts } = useSelector(store => store.post);
//   const [comment, setComment] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (selectedPost) {
//       setComment(selectedPost.comments);
//     }
//   }, [selectedPost]);

//   const changeEventHandler = (e) => {
//     const inputText = e.target.value;
//     setText(inputText.trim() ? inputText : "");
//   }

//   const sendMessageHandler = async () => {
//     try {
//       const res = await axios.post(
//         `http://localhost:8000/api/v1/post/${selectedPost?._id}/comment`,
//         { text },
//         {
//           headers: { 'Content-Type': 'application/json' },
//           withCredentials: true,
//         }
//       );
//       if (res.data.success) {
//         const updatedCommentData = [...comment, res.data.comment];
//         setComment(updatedCommentData);

//         const updatedPostData = posts.map(p =>
//           p._id === selectedPost._id
//             ? { ...p, comments: updatedCommentData }
//             : p
//         );
//         dispatch(setPosts(updatedPostData));
//         toast.success(res.data.message);
//         setText("");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Dialog open={open}>
//       <DialogContent
//         onInteractOutside={() => setOpen(false)}
//         className="max-w-5xl w-full p-0 flex flex-col md:flex-row overflow-hidden rounded-md bg-white"
//       >
//         {/* Left: Image */}
//         <div className="md:w-1/2 w-full bg-black flex items-center justify-center">
//           <img
//             className="w-full h-full object-cover rounded-l-md"
//             src={selectedPost?.image}
//             alt="post_img"
//           />
//         </div>

//         {/* Right: Comments Section */}
//         <div className="md:w-1/2 w-full flex flex-col justify-between border-l border-gray-200 bg-white">
//           {/* Header */}
//           <div className="flex items-center justify-between p-4 border-b border-gray-100">
//             <div className="flex gap-3 items-center">
//               <Link>
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src={selectedPost?.author?.profilePicture} />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//               </Link>
//               <div>
//                 <Link className="font-semibold text-sm hover:underline">
//                   {selectedPost?.author?.username}
//                 </Link>
//               </div>
//             </div>

//             <Dialog>
//               <DialogTrigger asChild>
//                 <MoreHorizontal className="cursor-pointer text-gray-600 hover:text-black" />
//               </DialogTrigger>
//               <DialogContent className="flex flex-col items-center text-sm text-center">
//                 <Button
//                   variant="ghost"
//                   className="cursor-pointer w-fit text-[#ED4956] font-bold"
//                 >
//                   Unfollow
//                 </Button>
//                 <div className="cursor-pointer w-full py-1 hover:bg-gray-50 rounded">
//                   Add to favorites
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>

//           {/* Comments List */}
//           <div className="flex-1 overflow-y-auto max-h-[420px] p-4 space-y-3">
//             {comment.length > 0 ? (
//               comment.map((c) => <Comment key={c._id} comment={c} />)
//             ) : (
//               <p className="text-gray-400 text-sm text-center mt-8">
//                 No comments yet — be the first!
//               </p>
//             )}
//           </div>

//           {/* Input Box */}
//           <div className="p-4 border-t border-gray-100">
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 value={text}
//                 onChange={changeEventHandler}
//                 placeholder="Add a comment..."
//                 className="w-full outline-none border border-gray-300 text-sm p-2 rounded focus:ring-1 focus:ring-gray-400 transition"
//               />
//               <Button
//                 disabled={!text.trim()}
//                 onClick={sendMessageHandler}
//                 variant="outline"
//                 className="text-sm px-3 py-1"
//               >
//                 Send
//               </Button>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default CommentDialog;


import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { MoreHorizontal } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import Comment from './Comment';
import axios from 'axios';
import { setPosts } from '@/redux/postSlice';
import { toast } from 'sonner';

function CommentDialog({ open, setOpen }) {
  const [text, setText] = useState('');
  const { selectedPost, posts } = useSelector(store => store.post);
  const [comment, setComment] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedPost) {
      setComment(selectedPost.comments);
    }
  }, [selectedPost]);

  const changeEventHandler = e => {
    const inputText = e.target.value;
    setText(inputText.trim() ? inputText : '');
  };

  const sendMessageHandler = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/post/${selectedPost?._id}/comment`,
        { text },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        const updatedCommentData = [...comment, res.data.comment];
        setComment(updatedCommentData);

        const updatedPostData = posts.map(p =>
          p._id === selectedPost._id
            ? { ...p, comments: updatedCommentData }
            : p
        );
        dispatch(setPosts(updatedPostData));
        toast.success(res.data.message);
        setText('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent
  onInteractOutside={() => setOpen(false)}
  className="w-[100vw] max-w-[1500px] h-[95vh] max-h-[550px] p-0 overflow-hidden flex flex-col md:flex-row bg-white rounded-xl shadow-2xl"
>
  {/* Left: Image Section */}
  <div className="w-full md:w-1/2 h-64 md:h-full bg-black flex items-center justify-center">
    <img
      src={selectedPost?.image}
      alt="post_img"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Right: Comments Section */}
  <div className="w-full md:w-1/2 flex flex-col bg-white h-full">
    {/* Header */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <Link>
          <Avatar className="h-9 w-9">
            <AvatarImage src={selectedPost?.author?.profilePicture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <Link className="font-semibold text-sm hover:underline">
            {selectedPost?.author?.username}
          </Link>
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <MoreHorizontal className="cursor-pointer text-gray-600 hover:text-black" />
        </DialogTrigger>
        <DialogContent className="flex flex-col items-center text-sm text-center">
          <Button
            variant="ghost"
            className="cursor-pointer w-fit text-[#ED4956] font-bold"
          >
            Unfollow
          </Button>
          <div className="cursor-pointer w-full py-1 hover:bg-gray-50 rounded">
            Add to favorites
          </div>
        </DialogContent>
      </Dialog>
    </div>

    {/* Comments */}
    <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
      {comment.length > 0 ? (
        comment.map(c => <Comment key={c._id} comment={c} />)
      ) : (
        <p className="text-gray-400 text-sm text-center mt-8">
          No comments yet — be the first!
        </p>
      )}
    </div>

    {/* Comment Input */}
    <div className="border-t border-gray-200 p-5 flex items-center gap-3">
      <input
        type="text"
        value={text}
        onChange={changeEventHandler}
        placeholder="Add a comment..."
        className="w-full text-sm bg-transparent outline-none border border-gray-300 rounded px-3 py-2 focus:ring-1 focus:ring-gray-400 transition"
      />
      <Button
        disabled={!text.trim()}
        onClick={sendMessageHandler}
        variant="outline"
        className="text-sm px-4 py-1.5"
      >
        Send
      </Button>
    </div>
  </div>
</DialogContent>

    </Dialog>
  );
}

export default CommentDialog;
