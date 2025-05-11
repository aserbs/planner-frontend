'use client'

import { authService } from "@/services/auth.service"
import { useMutation } from "@tanstack/react-query"
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation"

export function LogoutButton() {
    const router = useRouter();

    const { mutate } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess: () => router.push('/auth'),
    })

    return (
        <button
            className=" w-full flex gap-2.5 items-center py-1.5 mt-2 px-layout transition-colors hover:bg-border rounded-lg"
            onClick={() => mutate()}
        >
            <LogOut size={20} />
            <span>Logout</span>
        </button>
    )

}