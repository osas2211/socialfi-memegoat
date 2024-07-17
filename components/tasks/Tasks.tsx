"use client"
import Image from "next/image"
import { instance } from "@/app/api"
import { motion } from "framer-motion"
import { BiTask } from "react-icons/bi"
import React, { useEffect } from "react"
import { TaskStore } from "@/utils/store"
import throwError from "@/utils/throwError"
import { BsCheck2Circle } from "react-icons/bs"
import { AxiosError, AxiosResponse } from "axios"
import { MdRadioButtonUnchecked } from "react-icons/md"

export const Tasks = () => {
  const { tasks, setTasks } = TaskStore()

  const fetchTasks = async () => {
    await instance.get('/tasks')
      .then((res: AxiosResponse) => setTasks(res.data.data))
      .catch((err: AxiosError) => throwError(err))
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div>
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
        className="relative max-w-[600px] mx-auto"
      >
        <div className="rounded-sm from-primary-90/5 to-primary-60/20 md:p-6 p-4 border-[1px] border-primary-100 relative bg-gradient-to-r overflow-hidden">
          <h3 className="text-lg md:text-2xl">Tasks</h3>
          <p className="text-custom-white/55 text-sm md:text-[16px] mt-1">
            Complete Tasks to Earn{" "}
            <span className="text-primary-50"> $GOATSTX</span> Points
          </p>

          <div className="absolute top-0 right-0 text-primary-10/15 text-[8rem]">
            <BiTask />
          </div>
        </div>

        <div className="mt-10 space-y-5">
          {tasks.map(({ id, content }) => (
            <div key={id} className="border-l-2 border-primary-30 p-5 bg-gradient-to-r from-primary-60/20 to-primary-70/5">
              <div className="flex gap-4 items-center">
                <BsCheck2Circle className="text-2xl md:text-3xl text-primary-10" />
                <p dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
