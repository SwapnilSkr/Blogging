const mongoose = require('mongoose');
const marked = require('marked');
const createDomPurify = require('dompurify');
const {JSDOM} = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);
const User = require('./UserSchema');

const Schema = mongoose.Schema;

const author = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
})

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 70
    },
    subtitle: {
        type: String,
        trim: true,
        maxlength: 300
    },
    genre: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 1000
    },
    contentHtml: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    createdAt: {
        type: Date,
        immutable: true
    },
    image: {
        type: String,
    },
    imgName: {
        type: String,
    }
},{timestamps: true})

blogSchema.pre('validate', function(next){
    if(this.content){
        this.contentHtml = dompurify.sanitize(marked.parse(this.content))
        console.log(this.contentHtml);
    }
    next()
})

module.exports = mongoose.model('Blog', blogSchema);