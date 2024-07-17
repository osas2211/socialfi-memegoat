type NotifyAction = 'error' | 'success'

interface ILeaderboard {
    avatar?: string
    username: string
    displayName: string
    impressions: number
    tweets: number
}

interface IDashboard {
    user: {
        id: string
        useRef: boolean
        refPoint: number
        smartKey: string
        username: string
        createdAt: string
        profileId: string
        displayName: string
        avatar?: string
        tweetCounts: number
        rewards: {
            id: string
            earn: string
            updatedAt: Date
            createdAt: Date
        }[]
    }
    metadata: {
        views: number
        likes: number
        quotes: number
        replies: number
        retweets: number
    }
    userRank: null | number
    hasTurnedOffCampaign: boolean
}

interface UserState {
    me: IDashboard,
    setMe: (me: IDashboard) => void
}

interface LeaderboardState {
    stats: ILeaderboard[],
    setStats: (stats: ILeaderboard[]) => void
}

interface AuthState {
    isAuth: boolean
    setIsAuth: (isAuth: boolean) => void
}

interface Task {
    id: string
    createdAt: Date,
    updatedAt: Date,
    content: string
}

interface Tasks {
    tasks: Task[]
    setTasks: (tasks: Task[]) => void
}