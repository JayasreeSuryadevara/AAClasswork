export const signup = user => (
    $.ajax({
        url: `/api/user`,
        method: `post`,
        data: { user }
    })
);

export const login = user => (
    $.ajax({
        method: `post`,
        url: `/api/session`,
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: `delete`,
        url: `/api/session`
    })
);