import { toast } from "sonner"

export function ErrorMessage(message) {
    toast('Something went wrong', {
        description: message
    })
}

export function ProductAdded(message) {
    toast('Product added', {
        description: message + ' is already in your cart'
    })
}