const prisma = require("../utils/prisma");
const { logger } = require("../utils/activityLogger")
const express = require('express');
const router = express.Router();
const { uploadFile } = require("../uploadFile");


// TODO CATEGORIES ENDPOINTS

//create category

router.post(`/createCategory`, async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Missing required fields." });
    }
    try {
        const category = await prisma.category.create({
            data: { name }
        })
        res.status(200).json(
            { message: "Category Created Successfully", category, success: true },
        );
        await logger("category_created", name, `Category created: ${category.id}`);

    } catch (error) {
        res.status(500).json(
            { error: "Category Creation Failed", ...error, success: false },
        );
        await logger("error", name, `Error creating category: ${error.message}`);
    }
}
);

//get all categories

router.get(`/getCategories`, async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.status(200).json({ categories, success: true });
    } catch (error) {
        res.status(500).json({ error: "Internal Server error", ...error, success: false });
    }
}
);

//get category by id

router.post(`/getCategoryById`, async (req, res) => {
    try {
        const { id } = req.body;
        const category = await prisma.category.findFirst({
            where: { id },
            include: {
                blogs: true,
                _count: {
                    select: { blogs: true }, /* FIXASM */
                },
            }
        })
        if (!category) {
            return res.status(404).json({ error: "Category not found", success: false });
        }
        res.json({ category, success: true });
    } catch (error) {
        res.status(500).json({ error: "Internal server error", ...error, success: false });
    }
});

// delete category

router.post(`/deleteCategory`, async (req, res) => {
    try {
        const { id } = req.body;
        const category = await prisma.category.delete({
            where: { id },
        })
        res.status(200).json({ message: "Category deleted successfully", category, success: true });
    } catch (error) {
        res.status(500).json({ error: "Internal server error", ...error, success: false });
    }
});



// TODO BLOG ENDPOINTS

// get all blogs

router.get(`/getAllBlogs`, async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany();
        res.status(200).json({ blogs, success: true });
    } catch (error) {
        res.status(500).json({ error: "Internal Server error", ...error, success: false });
    }
});

// create blog

router.post(`/createBlog`, async (req, res) => {
    const { title, content, location, userId, categoryId } = req.body;
    if (!title || !content || !location || !userId || !categoryId) {
        return res.status(400).json({ error: "Missing required fields." });
    }
    try {
        const imageName = await uploadFile(req.files.img, "image");

        const blog = await prisma.blog.create({
            data: {
                title,
                content,
                imageUrl: imageName ?? null,
                location,
                userId,
                categoryId
            }
        })
        res.status(200).json(
            { message: "Blog Created Successfully", blog, success: true },
        );
        await logger("blog_created", title, `Blog created: ${blog.id}`);

    } catch (error) {
        res.status(500).json(
            { error: "Blog Creation Failed", ...error, success: false },
        );
        await logger("error", title, `Error creating blog: ${error.message}`);
    }
});

// get blog by id

router.post(`/getBlogById`, async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await prisma.blog.findFirst({
            where: { id },
            include: {
                category: true,
                user: true,
            }
        })
        if (!blog) {
            return res.status(404).json({ error: "Blog not found", success: false });
        }
        res.json({ blog, success: true });
    } catch (error) {
        res.status(500).json({ error: "Internal server error", ...error, success: false });
    }
});

// delete blog

router.post(`/deleteBlog`, async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await prisma.blog.delete({
            where: { id },
        })
        res.status(200).json({ message: "Blog deleted successfully", blog, success: true });
    } catch (error) {
        res.status(500).json({ error: "Internal server error", ...error, success: false });
    }
});

// update blog

router.post(`/updateBlog`, async (req, res) => {
    const { id, title, content} = req.body;
    if (!id || !title || !content) {
        return res.status(400).json({ error: "Missing required fields." });
    }
    try {
        const blog = await prisma.blog.update({
            where: { id },
            data: { title, content }
        })
        res.status(200).json(
            { message: "Blog Updated Successfully", blog, success: true },
        );
        await logger("blog_updated", title, `Blog updated: ${blog.id}`);

    } catch (error) {
        res.status(500).json(
            { error: "Blog Update Failed", ...error, success: false },
        );
        await logger("error", title, `Error updating blog: ${error.message}`);
    }
}
);


module.exports = router;
