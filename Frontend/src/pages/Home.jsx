import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../assets/images";
import { Button, Text, Img, Input, Heading } from "../components";
import LandingPageCardmatch1 from "../components/LandingPageCardmatch1";
const Home = () => {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  return (
    <>
      <Helmet>
        <title>sportZpod</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[478px] gap-[3px] bg-gray-900_03">
        <header className="flex flex-col items-center justify-center w-full gap-2.5 p-2.5 bg-gray-900_03">
          <div className="flex flex-row justify-between items-center w-full py-[3px] mx-auto max-w-[1321px]">
            <div className="flex flex-row justify-between items-center w-2/5">
              <LandingPageCardmatch1 className="flex flex-row justify-center w-[61%]" />
              <div className="flex flex-row justify-center">
                <Button size="sm" shape="square" className="w-full font-raleway font-semibold">
                  🔴 Live Score
                </Button>
              </div>
            </div>
            <div className="flex flex-row justify-between w-[19%]">
              <div className="flex flex-row justify-center p-2.5 bg-blue-A200">
                <a href="#" className="mt-[3px] mx-[9px]">
                  <Heading size="s" as="h6" className="!font-raleway text-center">
                    Login
                  </Heading>
                </a>
              </div>
              <Button size="sm" variant="outline" shape="square" className="font-raleway font-semibold min-w-[91px]">
                Sign in
              </Button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1321px]">
            <div className="flex flex-col items-center justify-start w-[3%]">
              <div className="h-[98px] w-full relative">
                <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Text size="6xl" as="p" className="!text-gray-50">
                    Z
                  </Text>
                  <div className="h-[98px] w-full mt-[-98px] relative">
                    <Text
                      size="6xl"
                      as="p"
                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-50 absolute"
                    >
                      Z
                    </Text>
                    <Text
                      size="3xl"
                      as="p"
                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-50 absolute"
                    >
                      o
                    </Text>
                  </div>
                </div>
                <Text
                  size="3xl"
                  as="p"
                  className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-50 absolute"
                >
                  o
                </Text>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[69%] mr-0.5">
              <div className="flex flex-row justify-between w-[43%]">
                <ul className="flex flex-row justify-between w-[67%]">
                  <li>
                    <a href="#">
                      <Text size="xs" as="p" className="!text-blue-A200">
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer hover:text-blue-A200">
                      <Text size="xs" as="p">
                        About us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <div className="flex flex-row justify-start items-center gap-[5px]">
                      <a href="#" className="cursor-pointer hover:text-blue-A200">
                        <Text size="xs" as="p">
                          Services
                        </Text>
                      </a>
                      <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[5px]" />
                    </div>
                  </li>
                </ul>
                <Text size="xs" as="p">
                  Testimonials
                </Text>
              </div>
              <Input
                color="gray_900_01"
                size="xs"
                variant="fill"
                shape="square"
                name="search"
                placeholder="Search"
                value={searchBarValue1}
                onChange={(e) => setSearchBarValue1(e)}
                suffix={
                  searchBarValue1?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue1("")} height={25} width={25} fillColor="#c4c4c4ff" />
                  ) : (
                    <Img
                      src="images/img_materialsymbolslightsearch.svg"
                      alt="material-symbols-light:search"
                      className="cursor-pointer"
                    />
                  )
                }
                className="w-[34%] gap-[35px] text-gray-400_01 border-gray-200"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-start items-start w-full gap-[29px] max-w-[1220px]">
            <div className="flex flex-col items-start justify-start w-[37%] mt-1.5 gap-6">
              <Heading size="md" as="h1" className="w-[83%] !text-gray-900_02">
                <span className="text-pink_100">
                  Latest.
                  <br />
                </span>
                <span className="text-blue_200">
                  News.
                  <br />
                </span>
                <span className="text-cyan_200">Score.</span>
              </Heading>
              <Text as="p" className="!font-normal">
                Get the latest sports news and score with us.
              </Text>
              <Button color="white_A700" size="2xl" className="min-w-[204px] rounded-[33px]">
                Join Now
              </Button>
            </div>
            <div className="flex flex-row justify-start items-center w-[61%] gap-[18px] py-1">
              <div className="flex flex-col items-center justify-start w-[24%] gap-2">
                <div className="flex flex-col items-center justify-center w-full p-4 bg-white-A700 rounded-[40px]">
                  <Img src="images/img_image_1.png" alt="imageone_one" className="w-[140px] my-2.5 object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center w-full p-4 bg-white-A700 rounded-[40px]">
                  <Img
                    src="images/img_image_1_140x140.png"
                    alt="imageone_three"
                    className="w-[140px] my-2.5 object-cover"
                  />
                </div>
                <div className="h-48 w-full bg-gray-900_03 rounded-[40px]" />
              </div>
              <div className="flex flex-col items-center justify-start w-[24%] gap-2">
                <div className="flex flex-col items-center justify-center w-full p-4 bg-white-A700 rounded-[40px]">
                  <Img src="images/img_image_2.png" alt="imagetwo_one" className="w-[140px] my-2.5 object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center w-full p-4 bg-white-A700 rounded-[40px]">
                  <Img src="images/img_image_1_1.png" alt="imageone_five" className="w-[140px] my-2.5 object-cover" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[24%] gap-2">
                <div className="flex flex-col items-center justify-start w-full p-[13px] bg-white-A700 rounded-[40px]">
                  <Text as="p" className="w-[95%] mt-2.5 !text-gray-900 text-center !font-normal leading-[26px]">
                    <span className="text-gray-900">Select the sports of whose </span>
                    <span className="text-red_A700">live stream</span>
                    <span className="text-gray-900">you want to enjoy</span>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-full p-4 bg-white-A700 rounded-[40px]">
                  <Img src="images/img_image_1_2.png" alt="imageone_seven" className="w-[140px] my-2.5 object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center w-full p-4 bg-white-A700 rounded-[40px]">
                  <Img src="images/img_image_3.png" alt="imagethree_one" className="w-[140px] my-2.5 object-cover" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[24%] gap-2">
                <div className="h-48 w-full bg-gray-900_03 rounded-[40px]" />
                <div className="flex flex-col items-center justify-center w-full p-4 bg-white-A700 rounded-[40px]">
                  <Img
                    src="images/img_image_3_140x140.png"
                    alt="imagethree"
                    className="w-[140px] my-2.5 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full mt-[62px] p-2 border-gray-400_02 border border-solid max-w-[1262px] rounded-lg">
            <div className="flex flex-row justify-between items-center w-[98%] ml-[15px] mr-3">
              <div className="flex flex-row justify-between items-center w-[41%]">
                <div className="flex flex-col items-start justify-start h-[76px] w-[76px] p-[5px] bg-orange-50 rounded-[50%]">
                  <Img
                    src="images/img_price_tag_1.png"
                    alt="pricetagone_one"
                    className="w-[57px] mb-2 ml-0.5 object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[3px]">
                  <Text size="lg" as="p" className="!text-[19.72px]">
                    Subscribe for latest news
                  </Text>
                  <Text size="xs" as="p" className="!text-[14.79px]">
                    Get Exclusive offers and discount for sports events
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start w-[42%] gap-3.5">
                <Input type="email" name="email" placeholder="Enter your email" className="w-[70%]" />
                <Button size="md" className="font-overpass min-w-[138px] rounded-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[93px] gap-[63px] max-w-[1221px]">
            <div className="flex flex-row justify-center w-[86%]">
              <div className="flex flex-col items-center justify-start w-full gap-[41px]">
                <Text size="4xl" as="p" className="text-center">
                  Discover the latest news.
                </Text>
                <div className="h-[684px] w-full relative">
                  <div className="flex flex-row justify-start items-center w-[38%] bottom-[3%] left-[4%] m-auto absolute">
                    <Text size="s" as="p" className="!text-white-A700_cc">
                      Cricket
                    </Text>
                    <div className="h-[29px] w-px ml-10 bg-yellow-A400_a3" />
                    <Text size="s" as="p" className="ml-[42px] !text-white-A700_cc">
                      M.S Dhoni
                    </Text>
                    <div className="h-[29px] w-px ml-[45px] bg-yellow-A400_a3" />
                    <Text size="s" as="p" className="ml-3 !text-white-A700_cc">
                      October 22, 2023
                    </Text>
                  </div>
                  <a href="#" className="w-[48%] bottom-[10%] left-0 m-auto absolute">
                    <Text size="xl" as="p" className="!text-red-50_cc !text-[23.25px]">
                      On Thursday, three Russian astronauts lifted off on the Moscow-17 spacecraft from the Sputnik 1
                      Satellite Launch Center deep in the Gobi Desert, heading for the Mir space station for a six-month
                      stay.
                    </Text>
                  </a>
                  <div className="flex flex-row justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-row justify-center w-[64%] mt-[23px]">
                      <div className="flex flex-row justify-center w-full">
                        <Text size="5xl" as="p" className="!text-red-50 !text-[63.29px]">
                          Cricket
                          <br />
                          Champion
                          <br />
                          Mr. MS Dhoni
                          <br />
                          hit a new world record today
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_image_4.png"
                      alt="imagefour_one"
                      className="w-[38%] ml-[-19px] object-cover rounded-[9px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full gap-[63px]">
              <div className="flex flex-col items-center justify-start w-[30%] gap-[15px]">
                <Img src="images/img_image.png" alt="new_one" className="w-full object-cover rounded-[20px]" />
                <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                  <div className="flex flex-row justify-start">
                    <Text size="md" as="p" className="!text-blue-A200">
                      New
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-start w-full py-2.5">
                      <Text as="p">Unleash the Power of Advanced Analytics</Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-5">
                  <Text size="xs" as="p" className="!text-gray-600">
                    2 Menuite Ago
                  </Text>
                  <Button
                    rightIcon={<Img src="images/img_vector_42.svg" alt="Vector 42" />}
                    className="gap-2.5 font-dmsans min-w-[245px]"
                  >
                    Read Now
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[30%] gap-[15px]">
                <Img
                  src="images/img_image_240x365.png"
                  alt="image_one"
                  className="w-full object-cover rounded-[20px]"
                />
                <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                  <div className="flex flex-row justify-start">
                    <Text size="md" as="p" className="!text-blue-A200">
                      New
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-start w-full py-2.5">
                      <Text as="p">Unleash the Power of Advanced Analytics</Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-5">
                  <Text size="xs" as="p" className="!text-gray-600">
                    2 Menuite Ago
                  </Text>
                  <Button
                    rightIcon={<Img src="images/img_vector_42.svg" alt="Vector 42" />}
                    className="gap-2.5 font-dmsans min-w-[245px]"
                  >
                    Read Now
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[30%] gap-[15px]">
                <Img src="images/img_image_5.png" alt="image_one" className="w-full object-cover rounded-[20px]" />
                <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                  <div className="flex flex-row justify-start">
                    <Text size="md" as="p" className="!text-blue-A200">
                      New
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-start w-full py-2.5">
                      <Text as="p">Unleash the Power of Advanced Analytics</Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-5">
                  <Text size="xs" as="p" className="!text-gray-600">
                    2 Menuite Ago
                  </Text>
                  <Button
                    rightIcon={<Img src="images/img_vector_42.svg" alt="Vector 42" />}
                    className="gap-2.5 font-dmsans min-w-[245px]"
                  >
                    Read Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[116px] gap-10 p-[50px] bg-gray-900_03">
            <div className="flex flex-col items-center justify-center w-full mt-[34px] py-[86px] border-gray-500 border border-solid bg-gray-900_03 shadow-xs max-w-[1340px] rounded-[60px]">
              <div className="flex flex-col items-center justify-start w-full gap-5">
                <div className="flex flex-row justify-center w-full pt-1 px-1">
                  <Text size="4xl" as="p" className="ml-[255px] mr-64 text-center">
                    FAQs Frequently Asked Questions!
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-full">
                  <Text size="md" as="p" className="w-[41%] !text-gray-400_03 text-center !font-medium">
                    Need Any Help? Send us a message using the form below and we&#39;ll get back to you promptly!
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full max-w-[1340px]">
              <div className="justify-center w-full gap-5 grid-cols-2 grid min-h-[auto]">
                <div className="flex flex-row justify-start items-center w-full gap-2.5 p-[17px] border-gray-100 border border-solid rounded-[20px]">
                  <Img src="images/img_icons.svg" alt="image" className="h-[31px] w-[31px]" />
                  <Text as="p" className="mt-[3px]">
                    How easy is it to setup AITool?
                  </Text>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-2.5 p-[17px] border-gray-100 border border-solid rounded-[20px]">
                  <Img src="images/img_icons.svg" alt="icons_one" className="h-[31px] w-[31px]" />
                  <Text as="p" className="mt-[3px]">
                    What your refund policy?
                  </Text>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-2.5 p-4 border-gray-100 border border-solid rounded-[20px]">
                  <Img src="images/img_icons.svg" alt="icons_one" className="h-[31px] w-[31px] ml-0.5" />
                  <Text as="p" className="mt-1">
                    Can I integrate AITool with other platforms?
                  </Text>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-2.5 p-4 border-gray-100 border border-solid rounded-[20px]">
                  <Img src="images/img_icons.svg" alt="icons_one" className="h-[31px] w-[31px] ml-0.5" />
                  <Text as="p" className="mt-1">
                    Do you have corporate plans?
                  </Text>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-2.5 p-[17px] border-gray-100 border border-solid rounded-[20px]">
                  <Img src="images/img_icons.svg" alt="icons_one" className="h-[31px] w-[31px]" />
                  <Text as="p" className="mt-[3px]">
                    How often do you add new content?
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[9px] p-[18px] border-gray-100 border border-solid rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_icons_black_900.svg" alt="icons_one" className="h-[38px] mb-px" />
                    <Text as="p">Can I cancel my subscription at any time?</Text>
                  </div>
                  <Text size="md" as="p" className="w-[59%] !text-gray-400_03">
                    We accept various payment methods, including major credit cards (Visa, Mastercard, American
                    Express), PayPal, and direct bank transfers. You can choose the most convenient option during the
                    checkout process.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full mb-[34px] px-[55px] py-[59px] white_A700_white_A700_00_border bg-blue-A200 max-w-[1340px] rounded-[60px]">
              <div className="flex flex-row justify-start items-center w-full gap-2.5 my-[18px]">
                <div className="flex flex-col items-start justify-start w-[79%] gap-[9px]">
                  <Text as="p">Still Need Help?</Text>
                  <Text size="md" as="p">
                    Can&#39;t find the answer here? Message us for help!
                  </Text>
                </div>
                <Button color="white_A700" size="xl" variant="outline" className="font-dmsans min-w-[257px]">
                  Shoot Us A Message!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
