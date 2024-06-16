import { Request, Response } from 'express';
import { PostService } from '../services/PostService';
import { UserService } from '../services/UserService';

// Handler to fetch all posts
export const all = async (req: Request, res: Response) => {
    try {
        const posts = await PostService.findAll();
        console.log('All posts:', posts); // Log to check the returned data
        res.json({ posts });
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: "Error fetching posts" });
    }
}

// Handler to fetch a single post by ID
export const one = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log('Fetching post with id:', id); // Log to check the received id
        const post = await PostService.findOne(parseInt(id));
        console.log('Fetched post:', post); // Log to check the returned post
        if (post) {
            res.json({ post });
        } else {
            res.status(404).json({ error: "Post not found" });
        }
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).json({ error: "Error fetching post" });
    }
}

// Handler to create a new post
export const create = async (req: Request, res: Response) => {
    try {
        const { title, body, author } = req.body;
        console.log('Received body:', req.body); // Log to check the received data
        if (title && body && author) {
            const user = await UserService.findOne({ id: parseInt(author) });
            console.log('Fetched author:', user); // Log to check the returned author
            if (user) {
                const post = await PostService.create({
                    title, body, authorId: user.id
                });
                console.log('Created post:', post); // Log to check the created post
                res.status(201).json({ post });
            } else {
                res.status(404).json({ error: "Author does not exist" });
            }
        } else {
            res.status(400).json({ error: "Incomplete data" });
        }
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: "Error creating post" });
    }
}

// Handler to toggle the published status of a post
export const togglePost = async (req: Request, res:Response) => {
    try {
        const { id } = req.params;
        const post = await PostService.findOne(parseInt(id));
        if (post) {
            const postUpdate = await PostService.update(
                post.id,
                { published: !post.published }
            );
            res.json({ post: postUpdate });
        } else {
            return res.json({ error: "Post does not exist" });
        }
    } catch(error){
        console.error('Error toggling post:', error);
        res.status(500).json({ error: "Error toggling post" });
    }
}

// Handler to delete a post
export const deletePost = async (req: Request, res:Response) => {
    try {
        const { id } = req.params;
        const post = await PostService.findOne(parseInt(id));
        if (post) {
            await PostService.delete(parseInt(id));
            return res.json({ success: "Post deleted" });
        } else {
            return res.json({ error: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error deleting post" });
    }
}
