import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="font-semibold text-3xl">CONTACT.</h1>
      </div>
      <header class="flex gap-3  mt-10 justify-center items-center h-[300px] mb-12 bg-fixed bg-center bg-cover custom-img border border-black">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174879.png"
          className="relative h-16 w-16"
        />
        <img
          src="https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_1280.png"
          className="relative h-16 w-16 "
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          className="relative h-14 w-14 "
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
          className="relative h-16 w-16 "
        />
      </header>
    </div>
  );
};

export default Contact;
