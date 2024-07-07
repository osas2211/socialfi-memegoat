"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "antd"
import { FaCoins } from "react-icons/fa6"
import { LeaderboardTable } from "./LeaderboardTable"
import { BsTwitterX } from "react-icons/bs"
import { GiRank3 } from "react-icons/gi"

export const Leaderboard = () => {
  return (
    <>
      {" "}
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
        className="relative"
      >
        <div className="rounded-sm from-primary-90/5 to-primary-60/20 md:p-6 p-4 border-[1px] border-primary-100 relative bg-gradient-to-r overflow-hidden">
          <h3 className="text-lg md:text-2xl">Our Leaderboard</h3>
          <p className="text-custom-white/55 text-sm md:text-[16px] mt-1">
            Tweet to Earn <span className="text-primary-50"> $GOATSTX</span>{" "}
            Points
          </p>
          <Button
            icon={<BsTwitterX />}
            className="bg-primary-60 mt-4 h-[35px]"
            type="primary"
          >
            Tweet
          </Button>

          <div className="absolute top-0 right-0 text-primary-10/15 text-[10rem]">
            <GiRank3 />
          </div>
        </div>
        <LeaderboardTable />
      </motion.div>
    </>
  )
}
