import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { search } = useParams();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(search || "");
  }, [search]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="ml-2 font-bold text-3xl">HyunTube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center ">
        <input
          className="w-7/12 p-2 pl-6 outline-none bg-zinc-900 text-gray-50 rounded-l-3xl border-zinc-700 border"
          type="text"
          value={text}
          placeholder="검색"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="px-6 bg-zinc-600 rounded-r-3xl">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
