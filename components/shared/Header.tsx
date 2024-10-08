"use client"
import Link from "next/link"
import { Logo } from "./Logo"
import { instance } from "@/app/api"
import { Button, Drawer } from "antd"
import { routes } from "@/data/routes"
import React, { useState } from "react"
import { MdEmail } from "react-icons/md"
import { AuthStore } from "@/utils/store"
import { showConnect } from "@stacks/connect"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseCircleOutline } from "react-icons/io5"
import { FaXTwitter, FaDiscord } from "react-icons/fa6"
import { userSession, appDetails } from "@/utils/stacks"
import { usePathname, useRouter } from "next/navigation"

export const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { isAuth, setIsAuth } = AuthStore()

  const toggleDrawer = () => setOpen(!open)

  const logout = async () => {
    await instance.post("/auth/logout").then(() => {
      localStorage.removeItem("auth")
      setIsAuth(false)
      router.push("/")
    })
  }

  const onConnectWallet = async () => {
    await showConnect({
      appDetails,
      onFinish: () => {
        window.location.reload()
      },
      userSession,
    })
  }

  const getUserPrincipal = () => {
    const userPrincipal = userSession.isUserSignedIn()
      ? userSession.loadUserData().profile.stxAddress.mainnet
      : ""
    return userPrincipal
  }

  function disconnectWallet() {
    userSession.signUserOut("/dashboard")
  }

  return (
    <>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        placement="left"
        styles={{
          mask: { backdropFilter: "blur(22px)" },
          content: {
            background: "rgba(16,69,29,0.1)",
            border: "1px solid rgba(16,69,29,0.85)",
          },
          header: { background: "transparent" },
        }}
        closeIcon={
          <IoCloseCircleOutline className="text-2xl text-primary-50" />
        }
      >
        <div className="mt-10 relative">
          <Logo />
          <div className="pt-14">
            <nav className="">
              <ul className="flex flex-col gap-1">
                {routes.map((route, index) => {
                  const active = route.path === pathname
                  const isLockerPage =
                    pathname.includes("locker") && index === 3
                  const activeCls =
                    active || isLockerPage
                      ? "font-bold border-[1px] border-primary-100/85 from-primary-90/25 to-transparent bg-gradient-to-r"
                      : "text-silver hover:text-custom-white"
                  return (
                    <li key={index}>
                      <Link
                        href={route.path}
                        className={`${activeCls} text-sm block p-4 hover:text-white`}
                        onClick={toggleDrawer}
                      >
                        {route.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className="flex gap-4 items-center mt-10">
              <Link
                href={"mailto:contact@memegoat.io"}
                target="_black"
                className="text-silver text-[22px] hover:text-custom-white"
              >
                <MdEmail />
              </Link>
              <Link
                href={"https://twitter.com/GoatCoinSTX"}
                target="_black"
                className="text-silver text-[20px] hover:text-custom-white"
              >
                <FaXTwitter />
              </Link>
              <Link
                href={"https://discord.com/invite/zUyqNNny"}
                target="_black"
                className="text-silver text-[20px] hover:text-custom-white"
              >
                <FaDiscord />
              </Link>
            </div>
            {isAuth && (
              <Button
                danger
                className="px-14 font-bold bg-transparent mt-5 w-full"
                onClick={() => logout()}
              >
                Log out
              </Button>
            )}
          </div>
        </div>
      </Drawer>
      <div
        className="fixed top-0 left-0 w-full border-b-[1px] border-b-silver/10 bg-custom-black/30 z-20"
        style={{ backdropFilter: "blur(22px)" }}
      >
        <div className="p-4 md:p-7 max-w-[95%] mx-auto ">
          <div className="flex items-center gap-3 justify-between">
            <div className="inline-flex gap-16 items-center">
              <Logo />
              <nav className="hidden xl:block">
                <ul className="inline-flex gap-7 items-center">
                  {routes.map((route, index) => {
                    const active = route.path === pathname
                    const isLockerPage =
                      pathname.includes("locker") && index === 3
                    const activeCls =
                      active || isLockerPage
                        ? "font-bold"
                        : "text-silver hover:text-custom-white"
                    return (
                      <li key={index}>
                        <Link
                          href={route.path}
                          className={`${activeCls} text-sm`}
                        >
                          {route.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>

            <div className="inline-flex gap-7 items-center">
              <div className="hidden md:inline-flex gap-4 items-center">
                <Link
                  href={"mailto:contact@memegoat.io"}
                  target="_black"
                  className="text-silver text-[22px] hover:text-custom-white"
                >
                  <MdEmail />
                </Link>
                <Link
                  href={"https://twitter.com/GoatCoinSTX"}
                  target="_black"
                  className="text-silver text-[20px] hover:text-custom-white"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href={"https://discord.com/invite/zUyqNNny"}
                  target="_black"
                  className="text-silver text-[20px] hover:text-custom-white"
                >
                  <FaDiscord />
                </Link>
              </div>
              {userSession.isUserSignedIn() ? (
                <Button
                  className="px-14 font-bold bg-transparent border-primary-90 md:text-primary-50"
                  onClick={() => disconnectWallet()}
                >
                  Disconnect Wallet
                </Button>
              ) : (
                <Button
                  className="px-14 font-bold bg-transparent border-primary-90 md:text-primary-50"
                  onClick={() => onConnectWallet()}
                >
                  Connect Wallet
                </Button>
              )}
              {isAuth && (
                <Button
                  danger
                  className="px-14 font-bold bg-transparent lg:block hidden"
                  onClick={() => logout()}
                >
                  Log out
                </Button>
              )}

              <div className="xl:hidden border-[1px] border-primary-90 text-primary-50 p-2">
                <GiHamburgerMenu
                  className="cursor-pointer"
                  onClick={toggleDrawer}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
