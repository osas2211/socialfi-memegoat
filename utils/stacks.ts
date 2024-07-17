import { AppConfig, UserSession } from "@stacks/connect"
import logo from "@/public/logo.png"

export const appDetails = {
    name: "MEMEGOAT Finance",
    icon: "localhost:3000" + "/logo.png",
}

export const appConfig = new AppConfig(["store_write", "publish_data"])
export const userSession = new UserSession({ appConfig })