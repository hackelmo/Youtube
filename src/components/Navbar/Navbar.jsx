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
        <h1 className="ml-2 font-bold text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          value={text}
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="px-4 bg-zinc-600">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
