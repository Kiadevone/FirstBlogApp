"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Posts } from "../Types/blogType";
import { fetchData } from "../api/fetchData";
import { addDuplicatePost } from "../api/addDuplicatedPost";
import { format } from "date-fns";
import { SortFilterType } from "../Types/SortFilterType";
import { status } from "../Types/StatusTyps";

type PostListContextType = {
  posts: Posts[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
  allPosts: Posts[];
  setAllPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
  sortFilter: SortFilterType;
  setSortFilter: React.Dispatch<React.SetStateAction<SortFilterType>>;
  statusFilter: status;
  setStatusFilter: React.Dispatch<React.SetStateAction<status>>;
  modal: ModalState;
  openModal: (type: ModalType, id: number) => void;
  handleDelete: (id: number | null) => void;
  closeModal: () => void;
  handleDuplicated: () => void;
};

type ModalType = "delete" | "edit" | "duplicate";

type ModalState = {
  modalType: ModalType | null;
  selectedId: number | null;
};

const PostListContext = createContext<PostListContextType | undefined>(
  undefined
);

export const PostListProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [allPosts, setAllPosts] = useState<Posts[]>([]);
  const [sortFilter, setSortFilter] = useState<SortFilterType>("none");
  const [statusFilter, setStatusFilter] = useState<status>("all");

  const [modal, setModal] = useState<ModalState>({
    modalType: null,
    selectedId: null,
  });

  const openModal = (type: ModalType, id: number) => {
    setModal({
      modalType: type,
      selectedId: id,
    });
  };

  const closeModal = () => {
    setModal({
      modalType: null,
      selectedId: null,
    });
  };

  const getData = async () => {
    try {
      const postsData = await fetchData();
      setAllPosts(postsData);
      setPosts(postsData);
    } catch (err) {
      console.log(err, "error in fetching data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id: number | null) => {
    try {
      await fetch(`http://localhost:4000/post/${id}`, {
        method: "DELETE",
      });
      setAllPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDuplicated = async () => {
    try {
      const selectedPost = posts.find((post) => post.id === modal.selectedId);

      if (!selectedPost) return;

      const selectedPostCopy = {
        ...selectedPost,
        id: undefined,
        view: 0,
        date: format(new Date(), "yyyy-MM-dd"),
      };

      const duplicatedPost = await addDuplicatePost(selectedPostCopy);
      setAllPosts((prev) => [...prev, duplicatedPost]);
    } catch (err) {
      console.log(err, "duplicated post is unsecssuesfull");
    }
  };

  const applyFilter = (allPosts: Posts[]) => {
    let allPostCopy = [...allPosts];

    if (statusFilter !== "all") {
      allPostCopy = allPostCopy.filter((post) => post.status === statusFilter);
    }

    if (sortFilter === "newest") {
      allPostCopy?.sort(
        (a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime()
      );
    }

    if (sortFilter === "oldest") {
      allPostCopy?.sort(
        (a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime()
      );
    }

    if (sortFilter === "a-z") {
      allPostCopy?.sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
      );
    }

    return allPostCopy;
  };

  useEffect(() => {
    setPosts(applyFilter(allPosts));
  }, [allPosts, statusFilter, sortFilter]);

  return (
    <PostListContext.Provider
      value={{
        statusFilter,
        setStatusFilter,
        sortFilter,
        setSortFilter,
        allPosts,
        setAllPosts,
        handleDelete,
        handleDuplicated,
        posts,
        openModal,
        closeModal,
        modal,
        setPosts,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export const usePostManageContext = () => {
  const context = useContext(PostListContext);
  if (!context)
    throw new Error("usePostManageContext must be used in PostListProvider");
  return context;
};
