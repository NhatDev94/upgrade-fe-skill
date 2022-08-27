
const linkApi = {
    'pending': '/pending-request',
    'pending-detail': '/pending-request/detail'
}

export const routerLink = (link) => {
    return linkApi[link]
}