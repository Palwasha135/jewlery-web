
import React, { useState } from "react";
import img1 from "../Assets/sect2.jpg";
import img2 from "../Assets/sec3.jpg";
import img3 from "../Assets/sec4.jpg";
import img4 from "../Assets/sec5.jpg";
import img5 from "../Assets/sec6.jpg";
import img6 from "../Assets/sec7.jpg";
import img7 from "../Assets/sec8.jpg";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";


const Post = ({ image, title, author, comments, excerpt }) => (
  <div>
    <div className="mt-16 first:mt-0">
      <img src={image} alt="" className="  " />
      <h1 className="font-serif text-3xl md:text-4xl mt-6 hover:text-[#cb8161] cursor-pointer">
        {title}
      </h1>
      <div className="flex items-center font-Lato mt-2 text-[#9b9b9b] text-sm">
        <div className="flex items-center">
          <CiUser className="text-black" />
          <h6 className="ml-2 cursor-pointer ">
            By: <span className="  hover:text-[#cb8161]">{author}</span>
          </h6>
        </div>
        <div className="flex items-center ml-8">
          <HiOutlineChatBubbleLeft className="text-black" />
          <h6 className="ml-2">{comments} Comments</h6>
        </div>
      </div>
      <p className="font-Lato text-sm mt-4 text-[#868686] tracking-[0.05rem] md:tracking-[0.00rem] leading-[1.60] ">
        {excerpt}
      </p>
      <div className="inline-block border border-[black] font-Lato text-xs px-7 py-3  mt-4 mb-10 md:mt-7 md:px-9 md:mb-14 hover:text-[#fff] hover:bg-[#cb8161]">
        <Link to="/" className="w-full h-full tracking-widest  no-underline text-black ">
          READ MORE
        </Link>
      </div>
    </div>
  </div>
);

const Section3 = () => {
  const posts = [
    {
      image: img1,
      title: "TRAVELING SOLO IS AWESOME",
      author: "Wpbingo",
      comments: 4,
      excerpt:
        "sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci....",
    },
    {
      image: img2,
      title: "A BEAUTIFUL SUNDAY MORNING",
      author: "Wpbingo",
      comments: 1,
      excerpt:
        "sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci....",
    },
    {
      image: img3,
      title: "A BEAUTIFUL SUNDAY MORNING",
      author: "Wpbingo",
      comments: 1,
      excerpt:
        "sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci....",
    },
    {
      image: img4,
      title: "LOREM IPSUM DOLOR SIT AMET ENIM",
      author: "Wpbingo",
      comments: 0,
      excerpt:
        "sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci....",
    },
    {
      image: img5,
      title: "A BEAUTIFUL SUNDAY MORNING",
      author: "Wpbingo",
      comments: 1,
      excerpt:
        "sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci....",
    },
    {
      image: img6,
      title: "A BEAUTIFUL SUNDAY MORNING",
      author: "Wpbingo",
      comments: 1,
      excerpt:
        "sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci....",
    },
    {
      image: img7,
      title: "A BEAUTIFUL SUNDAY MORNING",
      author: "Wpbingo",
      comments: 1,
      excerpt:
        "sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci....",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentPosts.map((post, index) => (
        <Post
          key={index}
          image={post.image}
          title={post.title}
          author={post.author}
          comments={post.comments}
          excerpt={post.excerpt}
        />
      ))}
      <div className="flex  mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          className={`${
            currentPage === 1 ? "opacity-0 cursor-not-allowed" : ""
          } bg-[#fff] text-[#868686] px-2 py-0 rounded mr-2 hover:bg-black hover:text-white`}
          disabled={currentPage === 1}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`${
              currentPage === number
                ? "bg-[#000] text-[#fff] w-8 h-8"
                : "bg-white text-[#868686]  w-8 h-8 hover:bg-black hover:text-white"
            }  border  px-2 py-0  mx-1  w-8 h-8`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          className={`${
            currentPage === pageNumbers.length
              ? "opacity-0 cursor-not-allowed"
              : ""
          } bg-[#fff] text-[#868686] rounded ml-2 pl-2 w-8 h-8 hover:bg-black hover:text-white`}
          disabled={currentPage === pageNumbers.length}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Section3;