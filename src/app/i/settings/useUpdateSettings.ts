import { userService } from "@/services/user.service";
import { TypeUserForm } from "@/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUpdateSettings() {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationKey: ['updateProfile'],
        mutationFn: (data: TypeUserForm) => userService.update(data),
        onSuccess() {
            toast.success('Profile updated successfully!')
            queryClient.invalidateQueries({ queryKey: ['profile'] })
        }
    })

    return { mutate, isPending }
}