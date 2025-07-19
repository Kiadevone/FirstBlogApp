"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePosts } from "./context/PostsContext";
import { filterPost } from "./pages/dashbord/filterPost";
import Link from "next/link";

const Search = () => {
  const posts = usePosts();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsOpen(true);
  };

  const filteredPost = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutSide = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-sm ml-auto">
      <label className="input w-64">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </label>
      {isOpen && searchQuery.length > 0 && (
        <Link href="/SearchedPost">
          <ul className="absolute z-10 w-full bg-white shadow-lg overflow-y-auto rounded-lg">
            {filteredPost.length > 0 ? (
              filteredPost.slice(0, 5).map((post) => (
                <li
                  key={post.id}
                  className="px-4 py-2 text-neutral-700 hover:bg-gray-100 border-1 border-gray-200 cursor-pointer text-md font-semibold"
                >
                  {post.title}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-neutral-700 hover:bg-gray-100 cursor-pointer text-md font-semibold">
                No results found
              </li>
            )}
          </ul>
        </Link>
      )}
    </div>
  );
};

export default Search;
