import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid); // Fetch user info when authentication state changes
    });

    return () => {
      unsubscribe(); // Cleanup function to unsubscribe from auth state changes
    };
  }, [fetchUserInfo]); // useEffect dependency: fetchUserInfo function

  if (isLoading) return <div className="loading">Loading...</div>; // Loading state while fetching user info

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List /> {/* Render List component */}
          {chatId && <Chat />} {/* Render Chat component if chatId exists */}
          {chatId && <Detail />} {/* Render Detail component if chatId exists */}
        </>
      ) : (
        <Login /> // Render Login component if currentUser is null
      )}
      <Notification /> {/* Always render Notification component */}
    </div>
  );
};

export default App;
