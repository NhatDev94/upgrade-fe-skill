const data = [
    {
        merchantId: '1233',
        name: 'Nhat shop',
        address: 'Ly Thai To',
        createdDate: '21-12-2020'
    },
    {
        merchantId: '1215',
        name: 'Ngoc shop',
        address: 'Ly Thuong Kiet',
        createdDate: '12-08-2019'
    },
    {
        merchantId: '1256',
        name: 'Huong shop',
        address: 'To Hien Thanh',
        createdDate: '15-04-2021'
    },
    {
        merchantId: '1234',
        name: 'Hoa shop',
        address: 'Bac Hai',
        createdDate: '27-11-2021'
    },
    {
        merchantId: '1294',
        name: 'Hue Em shop',
        address: 'Ba thang Hai',
        createdDate: '05-05-2022'
    },
    {
        merchantId: '1831',
        name: 'Le Nho shop',
        address: 'Thanh Thai',
        createdDate: '18-02-2020'
    },
    {
        merchantId: '1394',
        name: 'Minh Tam shop',
        address: 'Nguyen Tri Phuong',
        createdDate: '23-07-2020'
    },
]

const getAll = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: data,
                count: data.length,
                message: 'Success'
            })
        }, 400)
    })
}

const getById = (merchantId) => {
    const [result] = data.filter(item => +item.merchantId === +merchantId)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: result,
                count: data.length,
                message: 'Success'
            })
        }, 400)
    })
}

const post = (value) => {
    if (!value) return {
        data: null,
        message: 'Something went wrong'
    }

    const now = new Date()
    value.merchantId = '12'
    value.createdDate = `${now.getDay()}-${now.getMonth()}-${now.getFullYear()}`
    data = [...data, value]

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: 1,
                message: 'Success'
            })
        }, 400)
    })
}

const put = (merchantId, value) => {
    if (!value) return {
        data: null,
        message: 'Something went wrong'
    }
    data.map(item => {
        if (item.merchantId === merchantId) item = value
    })

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: 1,
                message: 'Success'
            })
        }, 400)
    })
}

const dele = (merchantId) => {
    if (merchantId) return {
        data: null,
        message: 'Something went wrong'
    }
    data = data.filter(item => item.merchantId !== merchantId)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: 1,
                message: 'Success'
            })
        }, 400)
    })
}

const PendingApi = {
    getAll,
    getById,
    post,
    put,
    dele
}

export default PendingApi