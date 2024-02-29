import React from "react";
import { Button, Heading, Text, Img } from "./..";

export default function LandingPageCardmatch1({
  astonvillavs = "Barcelona  vs Real Madrid",
  two = "2",
  prop = "-",
  three = "0",
  ht = "HT",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end items-center w-full bg-blue_gray-900 rounded-[16px]">
        <div className="flex flex-row justify-end w-[22%]">
          <div className="flex flex-col items-center justify-start h-9 w-9 z-[1]">
            <Button
              color="gray_900_04"
              size="xs"
              shape="circle"
              className="w-9 border-blue_gray-900 border-2 border-solid"
            >
              <Img src="images/img_group_6.svg" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start h-9 w-9 ml-[-2px]">
            <Button color="gray_900_04" size="xs" shape="circle" className="w-9">
              <Img src="images/img_group_6.svg" />
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-end w-[48%] ml-3.5">
          <div className="flex flex-col items-start justify-start w-full">
            <Heading as="h1">{astonvillavs}</Heading>
            <div className="flex flex-row justify-between items-center w-3/5 ml-[27px]">
              <Heading as="h2">{two}</Heading>
              <Text size="xs" as="p">
                {prop}
              </Text>
              <Heading as="h3">{three}</Heading>
            </div>
          </div>
        </div>
        <Button
          color="gray_900_04"
          size="3xl"
          className="ml-[19px] rounded-tr-[16px] rounded-br-[16px] font-sourcesanspro font-semibold min-w-[47px]"
        >
          {ht}
        </Button>
      </div>
    </div>
  );
}
