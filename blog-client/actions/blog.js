

export const getAllBlogs = async (count) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog/getAllBlogs`, {
            method: 'POST',
            cache: 'no-store',
        });

        const data = await res.json();
        if (count) {
            return data.blogs.slice(0, count);
        }
        return data.blogs;
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
};