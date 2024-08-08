import { create } from 'zustand'

export const AuthStore = create<AuthState>()((set) => ({
    isAuth: false,
    setIsAuth: (isAuth) => set({ isAuth })
}))

export const UserStore = create<UserState>()((set) => ({
    me: {
        user: {
            id: '',
            avatar: '',
            refPoint: 0,
            rewards: [],
            username: '',
            smartKey: '',
            createdAt: '',
            useRef: false,
            profileId: '',
            tweetCounts: 0,
            displayName: '',
        },
        metadata: {
            views: 0,
            likes: 0,
            quotes: 0,
            replies: 0,
            retweets: 0,
        },
        userRank: null,
        hasTurnedOffCampaign: false
    },
    setMe: (me) => set({ me })
}))

export const LeaderboardStore = create<LeaderboardState>()((set) => ({
    stats: [],
    setStats: (stats) => set({ stats })
}))

export const TaskStore = create<Tasks>()((set) => ({
    tasks: [],
    setTasks: (tasks) => set({ tasks })
}))