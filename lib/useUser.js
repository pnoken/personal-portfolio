import { useEffect } from "react"
import Router from "next/router"
import useSWR from 'swr'

export default function useUser({redirectTo = false, redirectIfFound = false,} = {}) {
    const {data: user, mutate: mutateUser } = useSWR('/api/user')

    useEffect(() => {
        //if noredirect needed, just return (example: already in /admin)
        //If user data not yet there (fetch in progress, logged in or not) then don't do anything 
        if (!redirectTo || !user) return

}