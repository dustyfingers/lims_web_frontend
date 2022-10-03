const methods = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'] as const;

interface ICustomFetch {
    url: string;
    method?: typeof methods[number];
    body: any;
}

const customFetch = async ({ url, method = 'GET', body }: ICustomFetch) => {
    const options = {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({ ...body }),
    };
    return await fetch(url, options);
};

export default customFetch;
