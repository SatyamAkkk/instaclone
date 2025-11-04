import { setUserProfile } from "@/redux/authSlice";
import axios from "axios";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetUserProfile =(userId)=>{
  // const [userProfile, setUserProfile] = useState(null);
   const { posts } = useSelector((store) => store.post);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUserProfile = async()=>{
      try{
        const res = await axios.get(`http://localhost:8000/api/v1/user/${userId}/profile`, {withCredentials: true});
        if(res.data.success){
          dispatch(setUserProfile(res.data.user));
        }
      }catch(error){
        console.log(error);
      }
    }
    fetchUserProfile();
  },[userId, posts]);
}
export default useGetUserProfile;

// import { setUserProfile } from "@/redux/authSlice";
// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// const useGetUserProfile = (userId) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!userId) return; // avoid call if userId is undefined

//     const fetchUserProfile = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:8000/api/v1/user/${userId}/profile`,
//           { withCredentials: true }
//         );

//         console.log("API Response:", res.data); // debug

//         if (res.data.success) {
//           dispatch(setUserProfile(res.data.user || res.data.users)); // check correct field
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUserProfile();
//   }, [userId, dispatch]);
// };

// export default useGetUserProfile;
