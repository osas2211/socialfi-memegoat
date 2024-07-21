"use client"
import {
  Tag,
  Input,
  Select,
  Space,
  Table,
  Avatar,
  Button,
  DatePicker,
} from "antd"
import moment from "moment"
import Link from "next/link"
import { instance } from "@/app/api"
import type { TableProps } from "antd"
import { BsTwitterX } from "react-icons/bs"
import { LeaderboardStore } from "@/utils/store"
import React, { useEffect, useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { BiCheckCircle, BiLinkExternal, BiSearch, BiUser } from "react-icons/bi"

const columns: TableProps<ILeaderboard>["columns"] = [
  {
    title: "Rank",
    dataIndex: "rank",
    key: "rank",
    render: (text) => (
      <div className="orbitron">
        <p>#{text}</p>
      </div>
    ),
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    render(value, record) {
      return (
        <Link
          href={""}
          className="font-medium flex items-center gap-2 hover:text-white text-primary-20 py-3"
        >
          <Avatar size={26} src={record.avatar}>
            <BiUser />
          </Avatar>
          <div className="flex items-center gap-2">
            <p className="underline">{record.username}</p>
            <BiLinkExternal className="text-[20px]" />
          </div>
        </Link>
      )
    },
  },
  {
    title: "Tweets",
    dataIndex: "tweets",
    key: "tweets",
    render(value, record) {
      return <div className="font-medium orbitron">{record.tweets}</div>
    },
  },
]

export const LeaderboardTable: React.FC = () => {
  const { stats, setStats } = LeaderboardStore()

  const leaderboard = async () => {
    const { data } = await instance.get("/leaderboard")
    setStats(data.data)
  }

  useEffect(() => {
    leaderboard()
  }, [])

  return (
    <div>
      <h3
        className={`orbitron special-text md:text-4xl text-3xl font-medium text-custom-white mt-10 mb-5`}
      >
        Leaderboard
      </h3>
      <div className="mb-4 grid md:grid-cols-4 gap-7">
        <div className="col-span-3 flex">
          <Input
            placeholder="Search"
            className="text-lg font-bold bg-transparent"
          />
          <Button className="h-full" type="primary">
            <BiSearch className="text-[20px]" />
          </Button>
        </div>
        <Button
          icon={<BsTwitterX />}
          className="w-full h-full bg-transparent border-primary-30/60 text-primary-50"
        >
          Tweet
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={stats}
        pagination={{
          size: "small",
          responsive: true,
          position: ["bottomCenter"],
        }}
        // bordered
        scroll={{ x: 1100 }}
      />
    </div>
  )
}
