import React from "react";

import { Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center p-6 sm:px-5 w-full">
          <div className="header-row mt-0.5 mb-[5px]">
            <div className="flex flex-row gap-3.5 items-center justify-center">
              <Img className="h-6 w-6" src="images/img_edit.svg" alt="edit" />
              <Text
                className="text-2xl md:text-[22px] text-gray-600 sm:text-xl uppercase"
                size="txtNunitoSansExtraBold24"
              >
                Blogsly
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-start md:ml-[0] ml-[211px] w-[29%] md:w-full">
            <div className="flex flex-col items-start justify-start w-1/5 sm:w-full">
              <Text
                className="text-indigo-900 text-lg tracking-[0.12px]"
                size="txtPublicSansBold18Indigo900"
              >
                Home
              </Text>
              <Line className="bg-indigo-900 h-px mt-1 w-[64%]" />
            </div>
            <Text
              className="text-indigo-200 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              Podcast
            </Text>
            <Text
              className="ml-[29px] text-indigo-200 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              Blog
            </Text>
            <Text
              className="ml-[30px] text-indigo-200 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              About
            </Text>
            <Text
              className="ml-[29px] text-indigo-200 text-lg tracking-[0.12px]"
              size="txtPublicSansBold18"
            >
              Contact
            </Text>
          </div>
          <Img
            className="h-[30px] sm:hidden mb-0.5 md:ml-[0] ml-[324px] w-[30px]"
            src="images/img_search.svg"
            alt="search"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
