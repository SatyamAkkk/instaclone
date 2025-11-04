// import React, { useState } from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
// import useGetUserProfile from '@/hooks/useGetUserProfile'
// import { Link, useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import { AtSign, Heart, MessageCircle } from 'lucide-react';

// function Profile() {
//   const params = useParams();
//   const userId = params.id;
//   useGetUserProfile(userId);
//   const [activeTab, setActiveTab] = useState('posts');

//   const { userProfile, user } = useSelector(store => store.auth);

//   const isLoggedInUserProfile = user?._id === userProfile?._id;
//   const isFollowing = false;

//   const handleTabChange = (tab)=> {
//     setActiveTab(tab);
//   }

//   const displayedPost = activeTab === "posts" ? userProfile?.posts : userProfile?.bookmarks;

//   return (
//     <div className='flex max-w-5xl justify-center mx-auto pl-10 mt-6'>
//       <div className='flex flex-col gap-20 p-8'>
//         <div className='grid grid-cols-2'>
//           <section className='flex items-center justify-center'>
//             <Avatar className="h-32 w-32">
//               <AvatarImage src={userProfile?.profilePicture} alt="profilephoto" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//           </section>
//           <section>
//             <div className='flex flex-col gap-5'>
//               <div className='flex items-center gap-2'>
//                 <span>{userProfile?.username}</span>
//                 {
//                   isLoggedInUserProfile ? (
//                     <>
//                     <Link to="/account/edit"><Button variant="secondary" className='hover:bg-gray-200 h-8'>Edit profile</Button></Link>   
//                       <Button variant="secondary" className='hover:bg-gray-200 h-8'>View archive</Button>
//                       <Button variant="secondary" className='hover:bg-gray-200 h-8'>Add tools</Button>
//                     </>
//                   ) : (
//                     isFollowing ? (
//                       <>
//                         <Button variant='secondary' className='h-8'>Unfollow</Button>
//                         <Button variant='secondary' className='h-8'>Message</Button>
//                       </>
//                     ) : (
//                       <Button className='bg-[#0095F6] hover:bg-[#3192d2] h-8'>Follow</Button>
//                     )
//                   )
//                 }

//               </div>
//               <div className='flex items-center gap-4'>
//                 <p><span className='font-semibold'>{userProfile?.posts.length}</span>posts</p>
//                 <p><span className='font-semibold'>{userProfile?.followers.length}</span>followers</p>
//                 <p><span className='font-semibold'>{userProfile?.following.length}</span>following</p>
//               </div>
//               <div className='flex flex-col gap-1'>
//                 <span className='font-semibold'>{userProfile?.bio || 'bio here...'}</span>
//                 <Badge className="w-fit" variant="secondary"><AtSign /><span className='pl-1'>{userProfile?.username}</span></Badge>
//                 <span>Learn code with patel mernstack style</span>
//                 <span>Turing code into fun</span>
//                 <span>DM for collaboration</span>
//               </div>
//             </div>
//           </section>
//         </div>
//         <div className='border-t border-t-gray-200'>
//            <div className='flex items-center justify-center gap-15 text-sm'>
//              <span className={`py-3 cursor-pointer ${activeTab === 'posts' ? 'font-bold' : ''}`} onClick={()=> handleTabChange('posts')}> POSTS </span>
//              <span className={`py-3 cursor-pointer ${activeTab === 'saved' ? 'font-bold' : ''}`} onClick={()=> handleTabChange('saved')}> SAVED </span>
//              <span className={`py-3 cursor-pointer ${activeTab === 'reels' ? 'font-bold' : ''}`} onClick={()=> handleTabChange('reels')} > REELS </span>
//              <span className={`py-3 cursor-pointer ${activeTab === 'tags' ? 'font-bold' : ''}`} onClick={()=> handleTabChange('tags')} > TAGS </span>
//            </div>
//            <div className='grid grid-cols-3 gap-1'>
//              {
//               displayedPost?.map((post)=>{
//                 return(
//                   <div key={post?._id} className='relative group cursor-pointer'>
//                     <img src={post.image} alt="postimage" className='rounded-md my-2 w-full aspect-square object-cover' />
//                     <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300'>
//                       <div className='flex items-center text-white space-x-4'>
//                         <button className='flex items-center gap-2 hover:text-gray-300'>
//                           <Heart />
//                           <span>{post?.likes.length}</span>
//                         </button>
//                         <button className='flex items-center gap-2 hover:text-gray-300'>
//                           <MessageCircle />
//                           <span>{post?.comments.length}</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })
//              }
//            </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Profile



import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { AtSign, Heart, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Make sure installed: npm install framer-motion

function Profile() {
  const params = useParams();
  const userId = params.id;

  // ✅ Fetch user profile on id change
  useGetUserProfile(userId);

  const { userProfile, user } = useSelector((store) => store.auth);
  const [activeTab, setActiveTab] = useState("posts");
  const [displayedPosts, setDisplayedPosts] = useState([]);

  const isLoggedInUserProfile = user?._id === userProfile?._id;
  const isFollowing = false;

  // ✅ Update displayed posts
  useEffect(() => {
    if (userProfile) {
      if (activeTab === "posts") setDisplayedPosts(userProfile.posts || []);
      else if (activeTab === "saved") setDisplayedPosts(userProfile.bookmarks || []);
      else setDisplayedPosts([]); // reels/tags placeholder
    }
  }, [activeTab, userProfile]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex max-w-5xl justify-center mx-auto pl-10 mt-6">
      <div className="flex flex-col gap-20 p-8 w-full">
        {/* ---------- PROFILE HEADER ---------- */}
        <div className="grid grid-cols-2">
          <section className="flex items-center justify-center">
            <Avatar className="h-32 w-32">
              <AvatarImage src={userProfile?.profilePicture} alt="profilephoto" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </section>

          <section>
            <div className="flex flex-col gap-5">
              {/* ---------- USERNAME + BUTTONS ---------- */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xl font-semibold">{userProfile?.username}</span>

                {isLoggedInUserProfile ? (
                  <>
                    <Link to="/account/edit">
                      <Button variant="secondary" className="hover:bg-gray-200 h-8">
                        Edit profile
                      </Button>
                    </Link>
                    <Button variant="secondary" className="hover:bg-gray-200 h-8">
                      View archive
                    </Button>
                    <Button variant="secondary" className="hover:bg-gray-200 h-8">
                      Add tools
                    </Button>
                  </>
                ) : isFollowing ? (
                  <>
                    <Button variant="secondary" className="h-8">
                      Unfollow
                    </Button>
                    <Button variant="secondary" className="h-8">
                      Message
                    </Button>
                  </>
                ) : (
                  <Button className="bg-[#0095F6] hover:bg-[#3192d2] h-8">
                    Follow
                  </Button>
                )}
              </div>

              {/* ---------- FOLLOW / POST COUNTS ---------- */}
              <div className="flex items-center gap-10">
                <p>
                  <span className="font-semibold">{userProfile?.posts?.length || 0}</span> posts
                </p>
                <p>
                  <span className="font-semibold">{userProfile?.followers?.length || 0}</span> followers
                </p>
                <p>
                  <span className="font-semibold">{userProfile?.following?.length || 0}</span> following
                </p>
              </div>

              {/* ---------- BIO ---------- */}
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{userProfile?.bio || "bio here..."}</span>
                <Badge className="w-fit" variant="secondary">
                  <AtSign />
                  <span className="pl-1">{userProfile?.username}</span>
                </Badge>
                <span>Learn code with Patel MERN stack style</span>
                <span>Turning code into fun</span>
                <span>DM for collaboration</span>
              </div>
            </div>
          </section>
        </div>

        {/* ---------- POSTS SECTION ---------- */}
        <div className="border-t border-t-gray-200">
          {/* ---------- TABS ---------- */}
          <div className="flex items-center justify-center gap-10 text-sm">
            {["posts", "saved", "reels", "tags"].map((tab) => (
              <span
                key={tab}
                className={`py-3 cursor-pointer ${
                  activeTab === tab
                    ? "font-bold border-t-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab.toUpperCase()}
              </span>
            ))}
          </div>

          {/* ---------- GRID ---------- */}
          <motion.div
            layout
            className="grid grid-cols-3 gap-0.5 min-h-[300px] transition-all duration-300"
          >
            <AnimatePresence>
              {displayedPosts?.length > 0 ? (
                displayedPosts.map((post) => (
                  <motion.div
                    key={post?._id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative group cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt="postimage"
                      className="rounded-md my-2 w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                      <div className="flex items-center text-white space-x-4">
                        <button className="flex items-center gap-2 hover:text-gray-300">
                          <Heart />
                          <span>{post?.likes?.length || 0}</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-gray-300">
                          <MessageCircle />
                          <span>{post?.comments?.length || 0}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 text-center text-gray-400 mt-10">
                  No {activeTab} to show.
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
