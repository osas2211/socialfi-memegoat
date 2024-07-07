"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button, Image as AntImage, Input } from "antd"
import { BsEye, BsQuote, BsTwitter } from "react-icons/bs"
import { FaRetweet } from "react-icons/fa6"
import { HiHeart } from "react-icons/hi"
import { BiChat, BiCopyAlt, BiKey } from "react-icons/bi"
import { GrGroup } from "react-icons/gr"

export const Dashboard = () => {
  return (
    <>
      <div className="fixed top-[10vh] right-[50%] translate-x-[50%]  z-[0]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 0, opacity: 0.05 }}
          transition={{ duration: 0.5 }}
          className="relative  w-[60rem] h-[60rem]"
        >
          <Image src="/logo.svg" className="w-full h-full" alt="" fill />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative md:w-[840px] mx-auto"
      >
        <div className="rounded-sm from-primary-90/5 to-primary-60/20 md:p-6 p-4 border-[0px] border-primary-100 relative bg-gradient-to-r flex flex-col md:flex-row justify-between md:items-center gap-5">
          <div className="flex gap-5 items-center">
            <div className="md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem] relative">
              <AntImage
                src={"/images/odin.jpg"}
                className="w-full h-full"
                alt=""
              />
            </div>
            <div>
              {" "}
              <h3 className="text-[16px] md:text-lg">John Doe</h3>
              <p className="text-custom-white/55 text-sm my-1">@johndoe</p>
              <p className="text-sm">
                Rank:{" "}
                <span className="text-primary-50 font-bold orbitron">#1</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[16px] md:text-lg">Campaign Rewards</h3>
            <p className="text-custom-white/55 text-sm md:my-1 mt-1 mb-3 md:text-end">
              100 GoatSTX
            </p>
            <Button type="primary" className="w-full">
              Claim Rewards
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <div className="p-4 backdrop-blur-[10px] bg-primary-80/5 h-[7rem]">
            <div className="flex items-center justify-between">
              <h3 className="text-silver neonText">Tweets</h3>
              <BsTwitter className="text-blue-400" />
            </div>
            <p className="text-xl text-primary-50 mt-4 text-bold orbitron">
              12
            </p>
          </div>
          <div className="p-4 backdrop-blur-[10px] bg-primary-80/5 h-[7rem]">
            <div className="flex items-center justify-between">
              <h3 className="text-silver neonText">Views</h3>
              <BsEye className="" />
            </div>
            <p className="text-xl text-primary-50 mt-4 text-bold orbitron">
              458
            </p>
          </div>
          <div className="p-4 backdrop-blur-[10px] bg-primary-80/5 h-[7rem]">
            <div className="flex items-center justify-between">
              <h3 className="text-silver neonText">Quotes</h3>
              <BsQuote />
            </div>
            <p className="text-xl text-primary-50 mt-4 text-bold orbitron">
              81
            </p>
          </div>
          <div className="p-4 backdrop-blur-[10px] bg-primary-80/5 h-[7rem]">
            <div className="flex items-center justify-between">
              <h3 className="text-silver neonText">Retweets</h3>
              <FaRetweet className="text-primary-20" />
            </div>
            <p className="text-xl text-primary-50 mt-4 text-bold orbitron">
              37
            </p>
          </div>
          <div className="p-4 backdrop-blur-[10px] bg-primary-80/5 h-[7rem]">
            <div className="flex items-center justify-between">
              <h3 className="text-silver neonText">Likes</h3>
              <HiHeart className="text-red-400" />
            </div>
            <p className="text-xl text-primary-50 mt-4 text-bold orbitron">
              208
            </p>
          </div>
          <div className="p-4 backdrop-blur-[10px] bg-primary-80/5 h-[7rem]">
            <div className="flex items-center justify-between">
              <h3 className="text-silver neonText">Replies</h3>
              <BiChat />
            </div>
            <p className="text-xl text-primary-50 mt-4 text-bold orbitron">
              74
            </p>
          </div>
          <div className="p-4 backdrop-blur-[10px] bg-primary-80/5 h-[7rem]">
            <div className="flex items-center justify-between">
              <h3 className="text-silver neonText">Referral Points</h3>
              <GrGroup className="text-primary-30" />
            </div>
            <p className="text-xl text-primary-50 mt-4 text-bold orbitron">
              60
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-10 mb-10">
          <div className="p-4 backdrop-blur-[10px] bg-primary-60/5 h-[7.5rem]">
            <div className="flex items-center justify-between">
              <h3 className="text-silver neonText md:text-2xl">Smart Key</h3>
              <BiKey className="text-primary-30" />
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-xs text-primary-50 mt-4 text-bold orbitron">
                U2FsdGVkX19KzHqnH...
              </p>
              <BiCopyAlt className="text-xl text-primary-10 cursor-pointer" />
            </div>
          </div>
          <div className="p-4 backdrop-blur-[10px] bg-primary-60/5 h-[7.5rem]">
            <div className="flex items-center justify-between">
              <h3 className="text-silver neonText md:text-2xl">
                Referral Username
              </h3>
              <div className="text-xs p-2 bg-primary-60/10 text-primary-30">
                <span>24h</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <Input
                className="col-span-2 bg-transparent border-primary-80"
                placeholder="Enter Referral Username"
              />
              <Button className="w-full" type="primary">
                Verify
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
