import { setMessages } from "@/redux/chatSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetRTM =()=>{
  const dispatch = useDispatch();
  const { socket } = useSelector(store => store.socketio);
  const { message } = useSelector(store => store.chat);
  useEffect(() => {
    socket?.on('newMessage', (newMessage) =>{
      dispatch(setMessages([...message, newMessage]));
    })

    return ()=>{
      socket?.off('newMessage');
    }
  },[message, setMessages]);
  
}

export default useGetRTM;