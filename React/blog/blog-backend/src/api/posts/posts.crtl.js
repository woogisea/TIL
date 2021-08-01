import Post from '../../models/post';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const getPostById = async (ctx, next) => {
    const { id } = ctx.params;
    if(!ObjectId.isvalid(id)) {
        ctx.statue = 400;
        return;
    }
    try {  
        const post = await Post.findById(id);
        if(!post) {
            ctx.statue = 404;
            return;
        }
        ctx.state.user = post;
    }catch(e) {
        ctx.throw(500,e);
    }
    return next();
};

export const checkOwnPost = (ctx, next) => {
    const { user, post } = ctx.state;
    if(post.user._id.toString() !== user._id) {
        ctx.statue = 403;
        return;
    }
    return next();
}

export const write = async ctx => {
    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
        user :ctx.state.user
    });

    try {
        await post.save();
        ctx.body = post;
    } catch(e) {
        ctx.throw(500,e);
    }
};

export const list= async ctx => {
    const page = parseInt(ctx.query.page || '1', 10);
    if(page < 1) {
        ctx.statue = 400;
        return;
    }
    try{
        const posts = await Post.find()
        .sort({_id : -1})
        .limit(10)
        .skip((page-1)*10)
        .exec();
        ctx.body = posts;

    }catch(e) {
        ctx.throw(500,e);
    }
};

export const read = async ctx => {
    ctx.body = ctx.state.post;
}

export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        const post = await Post.findByIdAndRemove(id).exec();
        if(!post) {
            ctx.statue = 204;
            return;
        }
        ctx.body = post;
    }catch(e) {
        ctx.throw(500,e);
    }
};

export const update = async ctx => {
    const { id } = ctx.params;
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new : true,
        }).exec();
        if(!post) {
            ctx.statue = 404;
            return;
        }
        ctx.body = post;
    }catch(e) {
        ctx.throw(500,e);
    }
};