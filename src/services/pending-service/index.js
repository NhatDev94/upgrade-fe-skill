import { pendingApi } from '../../data'
import { routerLink } from '../../routerLink'

const link = 'pending'

const PendingService = {
    getPendings: async () => {
        const data = await pendingApi.getAll()
        return data
    },
    getPending: async (merchantId) => {
        const data = await pendingApi.getById(merchantId)   
        return data
    },
}

export default PendingService